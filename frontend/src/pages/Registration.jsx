import React, { useState } from "react";
import { Link } from "react-router-dom"; // For linking to the Login page
import image from '../images/1.jpg'; // Import the image

const Registration = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "Student",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // Clear error on input change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.password) {
      setError("All fields are required.");
      return;
    }
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }
    console.log("Registration data:", formData);
    // Handle registration functionality
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-to-r from-[#b89e66] to-[#e4ad36]">
      {/* Form and Image Container */}
      <div className="flex bg-[#eedbb2] p-12 rounded-9xl shadow-xl max-w-5xl w-full space-x-12">
        
        {/* Image Section */}
        <div className="w-1/2">
          <img
            src={image}
            alt="Registration"
            className="w-full h-full object-cover rounded-2xl shadow-lg"/>
        </div>

        {/* Form Section */}
        <div className="w-1/2 p-8 flex flex-col justify-center items-center bg-gradient-to-r from-[#d8a63a] to-[#be8642] text-white rounded-2xl">
          <h1 className="text-4xl text-center font-extrabold mb-6 text-white">Create an Account</h1>
          
          {/* Display error message */}
          {error && <div className="text-red-500 text-center mb-4">{error}</div>}

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-[420px]">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium">Full Name:</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full p-4 border-b-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your full name"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium">Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 border-b-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your email"
                required
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium">Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-4 border-b-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter a strong password"
                required
              />
            </div>
            
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-white">Role:</label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full p-4 border-b-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="Student" className="bg-blue-200">Student</option>
                <option value="Parent" className="bg-blue-200">Parent</option>
                <option value="Admin" className="bg-blue-200">Admin</option>
              </select>
            </div>
            
            <button
              type="submit"
              className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-200 ease-in-out"
            >
              Register
            </button>
          </form>

          {/* Link to Login page */}
          <div className="text-center mt-6">
            <Link to="/login" className="text-white hover:underline">
              Already have an account? Login here.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;


