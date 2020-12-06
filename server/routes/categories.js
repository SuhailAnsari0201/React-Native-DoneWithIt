const express = require("express");
const router = express.Router();

const Categories = require("../models/Categories");

router.get("/", async (req, res) => {
  try {
    const categories = await Categories.find({});
    res.send(categories);
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ error: "SERVER ERROR." });
  }
});
module.exports = router;
// const express = require("express");
// const router = express.Router();
// const Categories = require("../models/Categories");

// router.get("/", (req, res) => {
//   const categories = Categories.getCategories();
//   console.log("Categories- ", categories);
//   res.send(categories);
// });

// module.exports = router;
