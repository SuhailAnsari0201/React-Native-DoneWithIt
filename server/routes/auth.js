const express = require("express");
const router = express.Router();
const config = require("config");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const validateWith = require("../middleware/validation");

const User = require("../models/User");

const schema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required().min(6),
});

// @route   POST api/auth
// @desc    Authenticate user & get token (Login User)
// @access  Public
router.post("/", validateWith(schema), async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user || user.password !== password)
      return res.status(400).send({ error: "Invalid email or password." });

    const token = jwt.sign(
      { userId: user.id, name: user.name, email },
      config.get("jwtSecret")
    );
    res.send(token);
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ error: "SERVER ERROR." });
  }
});

module.exports = router;
