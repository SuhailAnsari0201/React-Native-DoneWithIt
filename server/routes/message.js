const exprees = require("express");
const router = exprees.Router();

const auth = require("../middleware/auth");
const Messages = require("../models/Message");

router.get("/:id", auth, async (req, res) => {
  try {
    const message = Messages.findById({ _id: req.params.id });
    if (!message) return res.status(404).send();

    res.send(message);
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ error: "SERVER ERROR." });
  }
});
module.exports = router;
