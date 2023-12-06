// controllers/ordersController.js
const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

// Simulando um banco de dados temporário
const ordersDatabase = [];

router.get("/", (req, res) => {
  // Lógica para obter a lista de pedidos
  res.json({ message: "List of orders", orders: ordersDatabase });
});

router.post("/", (req, res) => {
  const { products } = req.body;
  const newOrder = new Order(ordersDatabase.length + 1, products, "Pending");
  ordersDatabase.push(newOrder);

  res.json({ message: "Order created successfully", order: newOrder });
});

module.exports = router;
