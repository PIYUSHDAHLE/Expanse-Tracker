// src/pages/Hero.jsx
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-blue-100 to-blue-300 text-center p-4">
      <h1 className="text-4xl font-bold mb-6">Welcome to Expense Tracker</h1>
      <p className="text-lg mb-8">Track your expenses, manage your budget, and take control of your finances.</p>
      <div className="flex gap-4">
        <Link to="/register" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Register</Link>
        <Link to="/login" className="bg-white border border-blue-600 text-blue-600 px-6 py-2 rounded hover:bg-blue-50">Login</Link>
      </div>
    </div>
  );
};

export default Hero;
