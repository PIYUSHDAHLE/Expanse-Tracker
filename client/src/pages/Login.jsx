import { useState } from "react";
import axios from "../utils/axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await axios.post("/auth/login", form);
    localStorage.setItem("token", res.data.token);
    navigate("/dashboard");
  };

  return (
    <div
      className="flex justify-center items-center h-screen relative bg-cover bg-center"
      style={{ backgroundImage: "url('/login-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <form
        onSubmit={handleSubmit}
        className="relative bg-gray-900 bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-sm z-10"
      >
        <h2 className="text-3xl font-bold mb-6 text-white text-center">Login</h2>
        <input
          className="w-full mb-4 p-3 rounded border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          className="w-full mb-6 p-3 rounded border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <button className="w-full bg-green-600 hover:bg-green-700 transition-colors text-white py-3 rounded font-semibold">
          Login
        </button>
      </form>
    </div>
  );
}
