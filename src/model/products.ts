import mongoose from "mongoose";
import { productProps } from "../interface/interface";
const Joi = require("joi-browser");

const productSchema = new mongoose.Schema< productProps>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  stock: { type: Number },
  images: { type: String },
});

export const Product = mongoose.model("Product", productSchema);

export const validate = (payload:productProps) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required(),
    category: Joi.string().required(),
    stock: Joi.number(),
    images: Joi.string(),
  });

  return schema.validate(payload)
};
