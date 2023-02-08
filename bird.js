const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});
router.get("/", (req, res) => {
  console.log("this is home page");
});
router.get("/about", (req, res) => {
  console.log("this is about page");
});

module.exports = router;
