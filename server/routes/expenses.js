
  
  const auth = require("../middleware/auth");
const express = require("express");
const Expense = require("../models/Expense");
const router = express.Router();

// Get all
router.get("/", auth,  async (req, res) => {
  const expenses = await Expense.find();
  res.json(expenses);
});

// Add
router.post("/", auth,  async (req, res) => {
  const newExpense = await Expense.create(req.body);
  res.json(newExpense);
});

// Update
router.put("/:id", auth,  async (req, res) => {
  const updated = await Expense.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// Delete
router.delete("/:id", auth,  async (req, res) => {
  await Expense.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

module.exports = router;

