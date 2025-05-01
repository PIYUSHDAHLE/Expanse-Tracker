const express = require("express");
const router = express.Router();
const Expense = require("../models/Expense");
const auth = require("../middleware/auth");

router.get("/", auth, async (req, res) => {
  const expenses = await Expense.find({ userId: req.user });
  res.json(expenses);
});

router.post("/", auth, async (req, res) => {
  const { title, amount } = req.body;
  const expense = await Expense.create({ title, amount, userId: req.user });
  res.status(201).json(expense);
});

router.delete("/:id", auth, async (req, res) => {
  await Expense.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;
