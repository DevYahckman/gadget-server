import express from "express";
import { User } from "../model/users";
import bcrypt from "bcrypt";
const router = express.Router();
const Joi = require("joi-browser");

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Invalid email or pwd");

  const validPassword = await bcrypt.compare(req.body.password, user.password);

  if (!validPassword) return res.status(400).send("Invalid email or pwd");

  const token = user.generateAuthToken()
  res.send(token);
});




const validate = (user: any) => {
  const schema = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  });

  return schema.validate(user);
};

export default router;
