const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const listingMapper = require("../mappers/listings");
const Listing = require("../models/Listing");

router.get("/listings", auth, async (req, res) => {
  try {
    const listings = await Listing.find({ userId: req.user.userId });
    const resource = listings.map(listingMapper);
    res.send(resource);
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ error: "SERVER ERROR." });
  }
});

module.exports = router;
