const mongoose = require("mongoose");
const config = require('config');
const debug = require("debug")("development:mongoose");

mongoose
  .connect(`${config.get("MOGODB_URI")}/anime_wear_closets`)
  .then(function () {
    debug("Database Connected"); // Debug log
  })
  .catch(function (err) {
    console.error("Database isn't connected", err);
  });

module.exports = mongoose.connection;
