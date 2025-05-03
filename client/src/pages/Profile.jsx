import { useState, useEffect } from "react";
import axios from "../utils/axios";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [form, setForm] = useState({
    phone: "",
    address: "",
    dateOfBirth: "",
    gender: "",
  });
  const [expenses, setExpenses] = useState([]);
  const [totalMoney, setTotalMoney] = useState(0);

  useEffect(() => {
    fetchProfile();
    fetchExpenses();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await axios.get("/profile");
      setUser(res.data);
      setForm({
        phone: res.data.phone || "",
        address: res.data.address || "",
        dateOfBirth: res.data.dateOfBirth ? res.data.dateOfBirth.split("T")[0] : "",
        gender: res.data.gender || "",
      });
    } catch (err) {
      console.error(err);
    }
  };

  const fetchExpenses = async () => {
    try {
      const res = await axios.get("/expenses");
      setExpenses(res.data);
      calculateTotal(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const calculateTotal = (expenses) => {
    let total = 0;
    expenses.forEach((exp) => {
      if (exp.type === "get") total += exp.amount;
      else if (exp.type === "give") total -= exp.amount;
    });
    setTotalMoney(total);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put("/profile", form);
      setUser(res.data);
      alert("Profile updated successfully");
    } catch (err) {
      console.error(err);
      alert("Failed to update profile");
    }
  };

  // Prepare data for pie chart
  const getMoney = expenses.filter((e) => e.type === "get").reduce((acc, e) => acc + e.amount, 0);
  const giveMoney = expenses.filter((e) => e.type === "give").reduce((acc, e) => acc + e.amount, 0);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      {user && (
        <div className="mb-6">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <div>
          <label className="block font-medium">Phone</label>
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label className="block font-medium">Address</label>
          <input
            type="text"
            name="address"
            value={form.address}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label className="block font-medium">Date of Birth</label>
          <input
            type="date"
            name="dateOfBirth"
            value={form.dateOfBirth}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label className="block font-medium">Gender</label>
          <select
            name="gender"
            value={form.gender}
            onChange={handleChange}
            className="border p-2 w-full"
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Update Profile
        </button>
      </form>

      <div>
        <h2 className="text-xl font-bold mb-2">Expense Summary</h2>
        <p><strong>Total Current Money:</strong> ₹{totalMoney}</p>
        <div className="flex space-x-4 mt-4">
          <div className="flex-1">
            <h3 className="font-semibold">Get Money</h3>
            <div
              className="bg-green-500 h-6 rounded"
              style={{ width: `${(getMoney / (getMoney + giveMoney)) * 100 || 0}%` }}
            />
            <p>₹{getMoney}</p>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold">Given Money</h3>
            <div
              className="bg-red-500 h-6 rounded"
              style={{ width: `${(giveMoney / (getMoney + giveMoney)) * 100 || 0}%` }}
            />
            <p>₹{giveMoney}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
