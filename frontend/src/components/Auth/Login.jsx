import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    try {
      console.log('*******meta', import.meta.env.VITE_BACKEND_BASE_URL);
      const response = await fetch(`${import.meta.env.VITE_BACKEND_BASE_URL}user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Login failed");
      }
      console.log("Login successful:", data);
      navigate("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      id="webcrumbs"
      className="flex justify-center items-center min-h-screen w-full bg-gray-100"
    >
      <div className="w-[400px] bg-white rounded-lg shadow-lg p-8">
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4">
            <span className="material-symbols-outlined text-3xl text-white">person</span>
          </div>
          <h1 className="text-2xl font-bold text-blue-500">Welcome Back</h1>
          <p className="text-blue-400">Please login to your account</p>
        </div>

        {error && <div className="text-red-500 mb-4 text-center">{error}</div>}

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-blue-600 mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-blue-600 mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input 
                type="checkbox" 
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="w-4 h-4 rounded border-blue-300 text-blue-500 focus:ring-blue-500" 
              />
              <span className="ml-2 text-sm text-blue-600">Remember me</span>
            </label>
            <a href="#" className="text-sm text-blue-500 hover:text-blue-700 transition duration-200">Forgot Password?</a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transform hover:scale-[1.02] transition-all duration-200 font-medium"
            disabled={isLoading}
          >
            {isLoading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-blue-600">
            Don't have an account?
            <a href="/signup" className="ml-1 text-blue-500 hover:text-blue-700 font-medium transition duration-200">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;