import { useState, useEffect } from "react";
import axios from "../utils/axios";

export default function Dashboard() {
  const [expenses, setExpenses] = useState([]);
  const [form, setForm] = useState({ type: "get", title: "", amount: "" });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    const res = await axios.get("/expenses");
    setExpenses(res.data);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editingId) {
      const res = await axios.put(`/expenses/${editingId}`, form);
      setExpenses(expenses.map(exp => exp._id === editingId ? res.data : exp));
      setEditingId(null);
    } else {
      const res = await axios.post("/expenses", form);
      setExpenses([...expenses, res.data]);
    }

    setForm({ type: "get", title: "", amount: "" });
  };

  const handleDelete = async (id) => {
    await axios.delete(`/expenses/${id}`);
    setExpenses(expenses.filter(exp => exp._id !== id));
  };

  const handleEdit = (expense) => {
    setForm({ type: expense.type, title: expense.title, amount: expense.amount });
    setEditingId(expense._id);
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Expense Tracker</h1>

      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-2 mb-6">
        <select
          name="type"
          value={form.type}
          onChange={handleChange}
          className="border p-2 w-full md:w-1/4"
        >
          <option value="get">Get Money</option>
          <option value="give">Given Money</option>
        </select>
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Title"
          className="border p-2 w-full md:w-1/3"
        />
        <input
          name="amount"
          type="number"
          value={form.amount}
          onChange={handleChange}
          placeholder="Amount"
          className="border p-2 w-full md:w-1/3"
        />
        <button
          type="submit"
          className={`${
            editingId ? "bg-green-600" : "bg-blue-600"
          } text-white px-4 py-2 rounded w-full md:w-auto`}
        >
          {editingId ? "Update" : "Add"}
        </button>
      </form>

      <ul className="space-y-2">
        {expenses.map((exp) => (
          <li
            key={exp._id}
            className="flex justify-between items-center border p-3 rounded shadow"
          >
            <span
              className={`font-medium ${
                exp.type === "get" ? "text-green-600" : "text-red-600"
              }`}
            >
              {exp.title} - ₹{exp.amount}
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(exp)}
                className="text-yellow-600 hover:underline"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(exp._id)}
                className="text-red-600 hover:underline"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
