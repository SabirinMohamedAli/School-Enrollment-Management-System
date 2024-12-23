import React, { useState } from "react"; 
import LoginImage from "../images/1.jpg"; // Import the image from src/images

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    setError(""); // Clear error on input change
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!credentials.email || !credentials.password) {
      setError("Please fill out all fields.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(credentials.email)) {
      setError("Invalid email format.");
      return;
    }

    // Simulate authentication (mock validation)
    if (credentials.email !== "test@example.com" || credentials.password !== "password") {
      setError("Invalid email or password.");
      return;
    }

    alert("Login successful!"); // Simulate success
  };

  return (
    <div className="flex items-center min-h-screen bg-gradient-to-br from-blue-500 to-indigo-600">
      {/* Image Section */}
      <div className="hidden md:block w-1/2 h-full bg-cover bg-center" 
           style={{ backgroundImage: `url(${LoginImage})` }}></div>

      {/* Form Section */}
      <div className="flex-1 flex justify-center items-center bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-4 sm:w-3/4 md:w-1/2">
        <div className="w-full">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
          {error && <div className="text-red-500 text-center mb-4">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={credentials.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
            >
              Login
            </button>
          </form>
          <div className="mt-4 text-center text-sm text-gray-600">
            <a href="/forgot-password" className="text-blue-600 hover:underline">
              Forgot Password?
            </a>
          </div>
          <p className="mt-4 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="/register" className="text-blue-600 hover:underline">
              Register here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;








// Login.js

// import React, { useState } from 'react';

// const Login = () => {
//   const [credentials, setCredentials] = useState({ email: '', password: '' });

//   const handleChange = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Send login data to the backend
//       const response = await fetch('/api/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(credentials),
//       });

//       const result = await response.json();
//       if (response.ok) {
//         localStorage.setItem('token', result.token);  // Save token in localStorage
//         alert('Login successful');
//       } else {
//         alert(result.message);
//       }
//     } catch (error) {
//       console.error('Error during login:', error);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-50">
//       <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
//         <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Login</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             name="email"
//             value={credentials.email}
//             onChange={handleChange}
//             placeholder="Email"
//             className="w-full p-3 mb-4 border border-gray-300 rounded"
//           />
//           <input
//             type="password"
//             name="password"
//             value={credentials.password}
//             onChange={handleChange}
//             placeholder="Password"
//             className="w-full p-3 mb-4 border border-gray-300 rounded"
//           />
//           <button type="submit" className="w-full py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700">
//             Login
//           </button>
//         </form>
//         <p className="mt-4 text-center">
//           Forgot your password? <a href="/reset-password" className="text-blue-600">Reset it</a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;
