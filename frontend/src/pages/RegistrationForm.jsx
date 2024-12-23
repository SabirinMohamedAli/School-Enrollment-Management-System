// import React, { useState } from 'react';

// const RegistrationForm = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     password: '',
//     role: 'Parent'
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission (you can add API calls here)
//     console.log(formData);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       <input
//         type="text"
//         name="fullName"
//         value={formData.fullName}
//         onChange={handleChange}
//         placeholder="Full Name"
//         className="w-full p-3 border border-gray-300 rounded"
//       />
//       <input
//         type="email"
//         name="email"
//         value={formData.email}
//         onChange={handleChange}
//         placeholder="Email"
//         className="w-full p-3 border border-gray-300 rounded"
//       />
//       <input
//         type="password"
//         name="password"
//         value={formData.password}
//         onChange={handleChange}
//         placeholder="Password"
//         className="w-full p-3 border border-gray-300 rounded"
//       />
//       <select
//         name="role"
//         value={formData.role}
//         onChange={handleChange}
//         className="w-full p-3 border border-gray-300 rounded"
//       >
//         <option value="Parent">Parent</option>
//         <option value="Student">Student</option>
//         <option value="Admin">Admin</option>
//       </select>
//       <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
//         Register
//       </button>
//     </form>
//   );
// };

// export default RegistrationForm;
















// RegistrationForm.js

// import React, { useState } from 'react';

// const RegistrationForm = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     password: '',
//     role: 'Parent'
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Send registration data to the backend
//       const response = await fetch('/api/register', {  // Adjust the endpoint
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });

//       const result = await response.json();
//       if (response.ok) {
//         alert('Registration successful');
//       } else {
//         alert(result.message);
//       }
//     } catch (error) {
//       console.error('Error during registration:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       <input
//         type="text"
//         name="fullName"
//         value={formData.fullName}
//         onChange={handleChange}
//         placeholder="Full Name"
//         className="w-full p-3 border border-gray-300 rounded"
//       />
//       <input
//         type="email"
//         name="email"
//         value={formData.email}
//         onChange={handleChange}
//         placeholder="Email"
//         className="w-full p-3 border border-gray-300 rounded"
//       />
//       <input
//         type="password"
//         name="password"
//         value={formData.password}
//         onChange={handleChange}
//         placeholder="Password"
//         className="w-full p-3 border border-gray-300 rounded"
//       />
//       <select
//         name="role"
//         value={formData.role}
//         onChange={handleChange}
//         className="w-full p-3 border border-gray-300 rounded"
//       >
//         <option value="Parent">Parent</option>
//         <option value="Student">Student</option>
//         <option value="Admin">Admin</option>
//       </select>
//       <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
//         Register
//       </button>
//     </form>
//   );
// };

// export default RegistrationForm;




















import React, { useState } from "react";

const RegistrationForm = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
    setError(""); // Clear error on input change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userDetails.name || !userDetails.email || !userDetails.password) {
      setError("All fields are required.");
      return;
    }
    if (userDetails.password !== userDetails.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    // Handle registration functionality
    console.log("Registered with:", userDetails);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-green-500 to-teal-600">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Create an Account</h2>
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={userDetails.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="email"
            name="email"
            value={userDetails.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="password"
            name="password"
            value={userDetails.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="password"
            name="confirmPassword"
            value={userDetails.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="w-full py-3 bg-green-600 text-white font-semibold rounded hover:bg-green-700 transition"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-green-600 hover:underline">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegistrationForm;


