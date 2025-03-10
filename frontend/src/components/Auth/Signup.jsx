import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css"; // Using the same style.css from the Login component

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      console.log("Environment Variables:", process.env);
      const response = await fetch(`${import.meta.env.VITE_BACKEND_BASE_URL}user/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || "Signup failed");
      }

      // Handle successful signup
      console.log("Signup successful:", data);
      navigate("/login"); // Redirect after successful signup
    } catch (err) {
      console.log('Error*******', err);
      
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="webcrumbs" className="flex">
      <div className="w-[400px] bg-white rounded-lg shadow-lg p-8">
        <div className="align-center">
          <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4">
            <span className="material-symbols-outlined text-3xl text-white">person_add</span>
          </div>
          <h1 className="text-2xl font-bold text-blue-500">Create Account</h1>
          <p className="text-blue-400">Please register to continue</p>
        </div>

        {error && <div className="text-red-500 mb-4 text-center">{error}</div>}

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-blue-600 mb-2">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              placeholder="Enter your username"
              required
            />
          </div>

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

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transform hover:scale-[1.02] transition-all duration-200 font-medium"
            disabled={isLoading}
          >
            {isLoading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-blue-600">
            Already have an account?
            <a href="/login" className="ml-1 text-blue-500 hover:text-blue-700 font-medium transition duration-200">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;