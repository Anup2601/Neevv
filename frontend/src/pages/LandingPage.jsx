import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-5xl font-extrabold text-blue-700 mb-4">
        Welcome to Our Platform
      </h1>
      <p className="text-xl text-gray-700 mb-6 max-w-xl">
        Connect, collaborate, and build something great. Start your journey today by logging in or signing up.
      </p>
      <div className="flex space-x-4">
        <Link to="/login">
          <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition duration-200">
            Login
          </button>
        </Link>
        <Link to="/signup">
          <button className="px-6 py-2 bg-white text-blue-600 font-semibold border border-blue-600 rounded-lg shadow hover:bg-blue-100 transition duration-200">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
}
