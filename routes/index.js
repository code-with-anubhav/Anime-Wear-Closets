const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middleware/isLoggedIn");
const productModel = require("../models/product-model");
const userModel = require("../models/user-model");

router.get("/", (req, res) => {
  let error = req.flash("error");
  res.render("index", { error, loggedin: false });
});

router.get("/shop", isLoggedIn, async (req, res) => {
  let products = await productModel.find();
  let success = req.flash("success");
  res.render("shop", { products, success });
});

router.get("/cart", isLoggedIn, async (req, res) => {
  let user = await userModel
    .findOne({ email: req.user.email })
    .populate("cart");

  const bill = Number(user.cart[0].price) + 20 - Number(user.cart[0].discount);

  res.render("cart", { user, bill });
});

// router.get("/cart", isLoggedIn, async (req, res) => {
//   try {
//     console.log("Querying user with email:", req.user.email);
//     let user = await userModel
//       .findOne({ email: req.user.email })
//       .populate("cart");

//     if (!user) {
//       console.log("No user found with this email.");
//       return res.status(404).send("User not found");
//     }

//     console.log("User found:", user);
//     console.log("User's cart:", user.cart);

//     res.render("cart", { user });
//   } catch (error) {
//     console.error("Error fetching user or cart:", error);
//     res.status(500).send("Internal Server Error");
//   }
// });

router.get("/addtocart/:productid", isLoggedIn, async (req, res) => {
  let user = await userModel.findOne({ email: req.user.email });
  user.cart.push(req.params.productid);
  await user.save();
  req.flash("success", "Added to Cart");
  res.redirect("/shop");
});
module.exports = router;
