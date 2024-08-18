import express from "express";
import _ from "lodash";
import { Order } from "../model/orders";
import auth from "../midleware/auth";

const router = express.Router();

router.get("/", async (req, res) => {
  res.send("order working fine");
});

router.post("/", auth, async (req, res) => {
  // @ts-ignore
  const userId = req.user?._id;

  // const userId = '66b7c2e6a33653f2186aa479'
  let order = new Order({
    // username:username,
    userId: userId,
    products: req.body.products,
    totalAmount: req.body.totalAmount,
    shippingAddress: req.body.shippingAddress,
  });

  await order.save();
  res.send(order);
});
export default router;
