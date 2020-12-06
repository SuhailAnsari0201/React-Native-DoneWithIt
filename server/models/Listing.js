const mongoose = require("mongoose");

const ListingSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  images: [
    {
      fileName: {
        type: String,
        required: true,
      },
    },
  ],
  price: {
    type: String,
    required: true,
  },
  categoryId: {
    type: Object,
    required: true,
  },

  location: {
    latitude: {
      type: String,
    },
    longitude: {
      type: String,
    },
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});
module.exports = Listing = mongoose.model("listings", ListingSchema);
