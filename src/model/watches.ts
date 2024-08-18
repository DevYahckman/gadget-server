import mongoose, { model } from 'mongoose'
// import { validateWatches } from './watches';
const Joi = require('joi-browser')


interface WatchesProps {
    id:string
    brand:string
    model:string
    description:string
    condition:string
    price:number
   
  }

const watchesSchema = new mongoose.Schema<WatchesProps>({
    id:{type: String, required:true},
    brand:{type:String, },
    model:{type:String, require:true},
    description:{type:String, require:true},
    condition:{type:String, require:true},
    price:{type:Number, require:true},

})

export const Watch = mongoose.model('Watch',watchesSchema)


export const validateWatches = (watches: WatchesProps) => {
    const schema = Joi.object({
      // id: Joi.string().required(),
      brand: Joi.string(),
      model: Joi.string().required(),
      description: Joi.string().required(),
      condition: Joi.string().valid('new', 'used').required(),
      price: Joi.number().required(),
    });
  
    return schema.validate(watches);
  };