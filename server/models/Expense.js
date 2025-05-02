const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  title: String,
  amount: Number,
  type: {
    type: String,
    enum: ["get", "give"],
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model("Expense", expenseSchema);
