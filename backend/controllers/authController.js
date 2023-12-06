// controllers/authController.js
const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Simulando um banco de dados temporário
const usersDatabase = [];

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = usersDatabase.find(
    (u) => u.email === email && u.password === password
  );

  if (user) {
    res.json({ message: "Login successful", user });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

router.post("/register", (req, res) => {
  const { username, email, password } = req.body;
  const newUser = new User(usersDatabase.length + 1, username, email, password);
  usersDatabase.push(newUser);

  res.json({ message: "Registration successful", user: newUser });
});

router.post("/forgot-password", (req, res) => {
  // Lógica simulada para redefinir a senha
  res.json({ message: "Password reset successful" });
});

module.exports = router;
