// routes.js
const express = require("express");
const router = express.Router();
const productsController = require("./controllers/productsController");
const ordersController = require("./controllers/ordersController");
const userController = require("./controllers/userController");
const authController = require("./controllers/authController");

router.get("/", (req, res) => {
  res.send("Welcome to the BakeBliss API");
});

router.use("/products", productsController);
router.use("/orders", ordersController);
router.use("/user", userController);
router.use("/login", authController.login);
router.use("/register", authController.register);
router.use("/forgot-password", authController.forgotPassword);

module.exports = router;
