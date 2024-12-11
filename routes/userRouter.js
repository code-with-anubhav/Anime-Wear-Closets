const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.send("Hey its working");
});

module.exports = router;
