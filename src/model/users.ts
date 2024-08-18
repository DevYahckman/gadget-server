import mongoose from "mongoose";
import { userProps } from "../interface/interface";
// import Joi from "joi-browser";
const Joi = require("joi-browser");
import jwt from 'jsonwebtoken'


const userSchema= new mongoose.Schema<userProps>({
    fullname:{type:String, required:true},
    username:{type:String, required:true},
    email:{type:String, required:true,unique:true},
    password:{type:String,required:true},
    role:{type:String, required:true}
})


userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id:this.id, username:this.username,role:this.role},'12345')
    return token
}



export const User = mongoose.model('USer', userSchema)

export const validateUser=(user:userProps)=>{
    const schema= Joi.object({
        fullname:Joi.string().required(),
        username:Joi.string().required(),
        email:Joi.string().required().email(),
        password:Joi.string().required(),
        // role:Joi.string().required()
    })

    return schema.validate(user)
}