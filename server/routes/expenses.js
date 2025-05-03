const auth = require("../middleware/auth");
const express = require("express");
const Expense = require("../models/Expense");
const router = express.Router();

// Get all expenses for logged in user
router.get("/", auth,  async (req, res) => {
  try {
    const expenses = await Expense.find({ user: req.user });
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add new expense for logged in user
router.post("/", auth,  async (req, res) => {
  try {
    const newExpense = await Expense.create({ ...req.body, user: req.user });
    res.json(newExpense);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update expense if it belongs to logged in user
router.put("/:id", auth,  async (req, res) => {
  try {
    const expense = await Expense.findOne({ _id: req.params.id, user: req.user });
    if (!expense) return res.status(404).json({ message: "Expense not found" });

    Object.assign(expense, req.body);
    const updated = await expense.save();
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete expense if it belongs to logged in user
router.delete("/:id", auth,  async (req, res) => {
  try {
    const expense = await Expense.findOne({ _id: req.params.id, user: req.user });
    if (!expense) return res.status(404).json({ message: "Expense not found" });

    await expense.remove();
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
