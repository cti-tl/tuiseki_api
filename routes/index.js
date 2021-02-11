var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/api", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.send({ name: "太郎" });
  console.log("get");
});

router.post("/api", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.send({ name: "太郎" });
  console.log("get");
});

module.exports = router;
