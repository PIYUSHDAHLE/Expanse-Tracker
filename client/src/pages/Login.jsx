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
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-xl font-semibold mb-4">Login</h2>
        <input className="w-full mb-2 p-2 border" type="email" name="email" placeholder="Email" onChange={handleChange} />
        <input className="w-full mb-2 p-2 border" type="password" name="password" placeholder="Password" onChange={handleChange} />
        <button className="w-full bg-green-600 text-white py-2 rounded">Login</button>
      </form>
    </div>
  );
}
