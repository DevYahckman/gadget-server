import express from "express";
import { Product, validate } from "../model/products";
const router = express.Router();
import _ from "lodash";

router.get("/", (req, res) => {
  res.send("Products page");
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const product = new Product(
    _.pick(req.body, ["name", "description", "price", "category"])
  );

  await product.save();
  res.send(product);
});

router.put("/:id", async (req, res) => {
  const product = await Product.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
      },
    },
    { new: true }
  );

  if (!product) return res.status(404).send("Unavailable news");
  res.send(product);
});

router.delete("/:id", async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product) return res.status(404).send("the product is unavailable");
  res.send(product);
 
});

export default router;
