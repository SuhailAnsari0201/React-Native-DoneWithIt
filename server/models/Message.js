const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  fromUserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    // required: true,
  },
  toUserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  listingId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "listings",
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});
module.exports = User = mongoose.model("messages", MessageSchema);
