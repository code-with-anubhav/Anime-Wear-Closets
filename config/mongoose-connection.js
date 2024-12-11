const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/anime_wear_closets")
  .then(function () {
    console.log("Database Connected"); // replace with debugers
  })
  .catch(function (err) {
    console.error("Database isn't connected", err);
  });

  
module.exports = mongoose.connection;
