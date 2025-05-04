import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <Link to="/common" className="font-bold">Expense Tracker</Link>
      <div className="space-x-4">
        {!token ? (
         <>
         <Link to="/" className="hover:underline">Home</Link>
           <Link to="/login" className="hover:underline">Login</Link>
           <Link to="/register" className="hover:underline">Register</Link>
         </>
        ) : (
    
<>
<Link to="/dashboard" className="hover:underline">Dashboard</Link>
<Link to="/profile" className="hover:underline">Profile</Link>
<button onClick={logout} className="hover:underline">Logout</button>
</>
        )}
      </div>
    </nav>
  );
}
