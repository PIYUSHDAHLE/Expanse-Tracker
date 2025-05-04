import { useState } from "react";
import axios from "../utils/axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post("/auth/register", form);
    navigate("/login");
  };

  return (
    <div className="flex h-screen">
      <div
        className="w-1/2 bg-cover bg-center"
        style={{ backgroundImage: "url('/register-bg.jpg')" }}
      >
        <div className="h-full w-full bg-black bg-opacity-60"></div>
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-900 bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-md text-white"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Register</h2>
          <input
            className="w-full mb-4 p-3 rounded border border-gray-700 bg-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            required
          />
          <input
            className="w-full mb-4 p-3 rounded border border-gray-700 bg-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
          <input
            className="w-full mb-6 p-3 rounded border border-gray-700 bg-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
          <button className="w-full bg-blue-600 hover:bg-blue-700 transition-colors text-white py-3 rounded font-semibold">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
