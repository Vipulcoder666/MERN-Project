// src/components/Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-600">Exam Platform</h1>
      <div className="space-x-6">
        <Link to="/" className="text-gray-700 hover:text-blue-600">Login</Link>
        <Link to="/dashboard" className="text-gray-700 hover:text-blue-600">Dashboard</Link>
        <Link to="/leaderboard" className="text-gray-700 hover:text-blue-600">Leaderboard</Link>
      </div>
    </nav>
  );
}
