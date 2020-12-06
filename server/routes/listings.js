const express = require("express");
const router = express.Router();
const Joi = require("joi");
const config = require("config");
const multer = require("multer");

const Listing = require("../models/Listing");
const auth = require("../middleware/auth");
const validateWith = require("../middleware/validation");
const imageResize = require("../middleware/imageResize");
const listingMapper = require("../mappers/listings");

const upload = multer({
  dest: "uploads/",
  limits: { fieldSize: 5 * 1024 * 1024 },
});

const schema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().allow(""),
  price: Joi.number().required().min(1),
  categoryId: Joi.string().required(),
  location: Joi.object({
    latitude: Joi.number().required(),
    longitude: Joi.number().required(),
  }).optional(),
});

// @route   GET api/listings
// @desc    Get all listings
// @access  Public
router.get("/", async (req, res) => {
  try {
    const listings = await Listing.find({});
    const resources = listings.map(listingMapper);

    res.send(resources);
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ error: "SERVER ERROR." });
  }
});

// @route   POST api/listing
// @desc    Add new listing
// @access  Privates
router.post(
  "/",
  [
    auth,
    upload.array("images", config.get("maxImageCount")),
    validateWith(schema),
    imageResize,
  ],
  async (req, res) => {
    console.log("File ", req.files);
    const listing = {
      title: req.body.title,
      price: req.body.price,
      description: req.body.description,
      categoryId: req.body.categoryId,
    };
    try {
      listing.images = req.images.map((fileName) => ({ fileName: fileName }));
      if (req.body.location) listing.location = req.body.location;
      if (req.user) listing.userId = req.user.userId;

      let data = new Listing(listing);
      await data.save();
      res.status(201).send(data);
    } catch (error) {
      console.error(error.message);
      res.status(500).send({ error: "SERVER ERROR." });
    }
  }
);
module.exports = router;
