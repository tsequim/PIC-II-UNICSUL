// controllers/productsController.js
const express = require("express");
const router = express.Router();

// Model - Pode ser implementado posteriormente

// Rota GET /products
router.get("/", (req, res) => {
  // Lógica para obter a lista de produtos
  res.json({ message: "List of products" });
});

module.exports = router;
