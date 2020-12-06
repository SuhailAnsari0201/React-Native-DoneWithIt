const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const Listing = require("../models/Listing");
const User = require("../models/User");

router.get("/:id", auth, async (req, res) => {
  try {
    const user = await User.findById({ _id: req.params.id });
    if (!user)
      return res
        .status(404)
        .send({ error: "User with this Id is not in Database" });

    const listings = await Listing.find({ userId: req.params.id });

    res.send({
      id: user.id,
      name: user.name,
      email: user.email,
      listings: listings.length,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ error: "SERVER ERROR." });
  }
});
module.exports = router;
