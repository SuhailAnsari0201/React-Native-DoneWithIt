const express = require("express");
const router = express.Router();
const Joi = require("joi");
const { Expo } = require("expo-server-sdk");

const auth = require("../middleware/auth");
const validateWith = require("../middleware/validation");
const Message = require("../models/Message");
const User = require("../models/User");
const Listing = require("../models/Listing");

const schema = Joi.object({
  listingId: Joi.string().required(),
  message: Joi.string().required(),
});

router.get("/", auth, async (req, res) => {
  try {
    const messages = await Message.find({ toUserId: req.user.userId });
    const mapUser = async (userId) => {
      const user = await User.findById({ _id: userId });
      return { id: user.id, name: user.name };
    };
    const resources = messages.map(async (message) => ({
      id: message.id,
      listingId: message.listingId,
      dateTime: message.timestamp,
      content: message.content,
      fromUser: await mapUser(message.fromUserId),
      toUser: await mapUser(message.toUserId),
    }));
    const result = await Promise.all(resources);
    res.send(result);
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ error: "SERVER ERROR." });
  }
});

router.post("/", [auth, validateWith(schema)], async (req, res) => {
  const { listingId, message } = req.body;
  try {
    const listing = await Listing.findById({ _id: listingId });
    if (!listing) return res.status(400).send({ error: "Invalid ListingId." });
    const targetUser = User.findById({ _id: listing.userId });
    if (!targetUser) return res.status(400).send({ error: "Invalid userId." });

    const messageData = new Message({
      fromUserId: req.user.userId,
      toUserId: listing.userId,
      listingId,
      content: message,
    });

    await messageData.save();
    const { expoPushToken } = targetUser;

    if (Expo.isExpoPushToken(expoPushToken)) {
      console.log("Expo notificatin is Founded.");
      await sendPushNotification(expoPushToken, message);
    } else {
      console.log("Expo notificatin is Not Founded.");
    }
    res.status(201).send();
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ error: "SERVER ERROR." });
  }
});
module.exports = router;
