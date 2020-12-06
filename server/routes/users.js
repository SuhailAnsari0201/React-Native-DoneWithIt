const express = require("express");
const router = express.Router();
const Joi = require("joi");
const validateWith = require("../middleware/validation");

const User = require("../models/User");

const schema = Joi.object({
  name: Joi.string().required().min(4),
  email: Joi.string().email().required(),
  password: Joi.string().required().min(6),
});

// @route   POST api/users
// @desc    Register new User
// @access  Public
router.post("/", validateWith(schema), async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user)
      return res
        .status(400)
        .send({ error: "A user with the given email already exists." });

    console.log("done");
    user = new User({ name, email, password });
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ error: "SERVER ERROR." });
  }
});

module.exports = router;
