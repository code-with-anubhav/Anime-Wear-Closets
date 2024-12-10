const express = require("express");
const router = express.Router();

router.get("/user", function (req, res) {
  res.send("Hey its working");
});

module.exports = router;
