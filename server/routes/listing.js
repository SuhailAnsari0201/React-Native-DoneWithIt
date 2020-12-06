const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const listingMapper = require("../mappers/listings");
const Listiing = require("../models/Listing");

router.get("/:id", auth, async (req, res) => {
  try {
    const listing = await Listiing.findById({ _id: req.params.id });
    if (!listing) return res.status(404).send();

    const resource = listingMapper(listing);
    res.send(resource);
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ error: "SERVER ERROR." });
  }
});
module.exports = router;
