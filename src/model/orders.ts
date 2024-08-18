import mongoose from "mongoose";
const Joi = require("joi-browser");

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  products: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        min: 1,
      },
    },
  ],
  totalAmount: { type: Number, required: true },
  shippingAddress: { type: String, required: true },

  status: {
    type: String,
    enum: ["pending", "shipped", "delivered", "canceled"],
    default: "pending",
  },
});

export const Order = mongoose.model("Order", orderSchema);

// export validate= (payload)=>{
//     const schema=Joi.object({

//     })
// }
