import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import image from "../images/1.jpg"; 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate(); 

  // Handle form submission (login)
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic Input Validation
    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    setError(""); 

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log("Login successful:", data);
        // Correct navigation after login
        navigate("/Dashboard"); // Navigate to /dashboard instead of /login/Dashboard.jsx
      } else {
        setError(data.message || "Login failed.");
      }
    

      // const data = await response.json();

      if (response.ok) {
        console.log("Login successful:", data);
        // Redirect based on role
        if (data.role === "Admin") {
          navigate("/dashboard"); // Correct path for the dashboard
        } else if (data.role === "Student") {
          navigate("/students"); // Correct path for students
        } else if (data.role === "Parent") {
          navigate("/"); // Navigate to home for parents
        } else {
          setError("Unknown role. Please contact support.");
        }
        
      } else {
        setError(data.message || "Invalid login credentials.");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setError("Network error. Please try again later.");
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-to-r from-[#F5EFBD] via-[#59B8C3] to-[#2D8BA5]">
      <div className="flex bg-gradient-to-r from-[#F5EFBD] via-[#59B8C3] to-[#2D8BA5] p-8 rounded-xl shadow-lg max-w-4xl w-full">
        {/* Image Section */}
        <div className="w-1/2">
          <img
            src={image}
            alt="Login Illustration"
            className="w-full h-full object-cover rounded-l-xl"
          />
        </div>

        {/* Form Section */}
        <div className="w-1/2 p-8 flex flex-col justify-center items-center bg-white rounded-r-xl">
          <h1 className="text-5xl text-center text-gray-700 font-bold">Login</h1>

          {/* Error Message */}
          {error && <div className="text-red-500 text-center mb-4">{error}</div>}

          <form className="mt-6 w-full max-w-[400px]" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
                className="w-full p-4 border-b-2 border-gray-100 rounded-lg focus:outline-none"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 font-medium">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password"
                  className="w-full p-4 border-b-2 border-gray-300 rounded-lg focus:outline-none"
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-3 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
            </div>

            <div className="flex justify-between mb-6">
              <a href="/PasswordResetForm" className="text-black font-bold hover:text-[#184b5c]">
                Forgot Password?
              </a>
              <a href="/register" className="text-[#FED600] hover:text-[#184b5c]">
                Don't have an account? Register
              </a>
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-[#2D8BA5] text-white py-3 rounded-md hover:bg-[#184b5c] focus:outline-none"
                disabled={loading}
              >
                {loading ? "Loading..." : "Login"}
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <a
              href="/register"
              className="text-[#FED600] hover:text-[#184b5c] border-b text-[20px] border-gray-400 rounded-sm"
            >
              Don't have an account? Register
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
