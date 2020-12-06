const express = require("express");
const router = express.Router();
const Joi = require("joi");

const auth = require("../middleware/auth");
const validateWith = require("../middleware/validation");
const User = require("../models/User");

const schema = Joi.object({
  token: Joi.string().required(),
});

router.post("/", [auth, validateWith(schema)], async (req, res) => {
  try {
    const user = await User.findById({ _id: req.user.userId });
    if (!user) return res.status(400).send({ errro: "Invalid User." });

    user.expoPushToken = req.body.token;
    await user.save();
    res.status(201).send();
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ error: "SERVER ERROR." });
  }
});
module.exports = router;
