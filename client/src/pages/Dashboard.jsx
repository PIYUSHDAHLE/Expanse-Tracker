import { useState, useEffect } from "react";
import axios from "../utils/axios";

export default function Dashboard() {
  const [expenses, setExpenses] = useState([]);
  const [form, setForm] = useState({ title: "", amount: "" });

  useEffect(() => {
    axios.get("/expenses").then(res => setExpenses(res.data));
  }, []);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await axios.post("/expenses", form);
    setExpenses([...expenses, res.data]);
    setForm({ title: "", amount: "" });
  };

  const handleDelete = async id => {
    await axios.delete(`/expenses/${id}`);
    setExpenses(expenses.filter(exp => exp._id !== id));
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input name="title" value={form.title} onChange={handleChange} placeholder="Title" className="border p-2 w-full" />
        <input name="amount" type="number" value={form.amount} onChange={handleChange} placeholder="Amount" className="border p-2 w-full" />
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Add</button>
      </form>

      <ul>
        {expenses.map(exp => (
          <li key={exp._id} className="flex justify-between p-2 border-b">
            <span>{exp.title} - ₹{exp.amount}</span>
            <button onClick={() => handleDelete(exp._id)} className="text-red-600">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
