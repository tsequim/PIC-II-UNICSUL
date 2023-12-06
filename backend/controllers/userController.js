// controllers/userController.js
const express = require("express");
const router = express.Router();

// Model - Pode ser implementado posteriormente

// Rota POST /user
router.post("/", (req, res) => {
  // Lógica para criar um novo usuário
  res.json({ message: "User created successfully" });
});

// Rota PUT /user
router.put("/", (req, res) => {
  // Lógica para atualizar informações do usuário
  res.json({ message: "User updated successfully" });
});

module.exports = router;
