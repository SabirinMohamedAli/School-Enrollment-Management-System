import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import image from '../images/1.jpg'; 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/Dashboard"); 
    }, 1500); 
  };

  return (
    <div className="h-screen w-full flex items-center justify-center">
      {/* Form and Image Container */}
      <div className="flex bg-gradient-to-r from-[#F5EFBD] via-[#59B8C3] to-[#2D8BA5] p-8 rounded-xl shadow-lg max-w-4xl w-full">
        
        {/* Image Section */}
        <div className="w-1/2">
          <img
            src={image}
            alt="Logo"
            className="w-full h-full object-cover rounded-l-xl"
          />
        </div>

        {/* Form Section */}
        <div className="w-1/2 p-8 flex flex-col justify-center items-center bg-white rounded-r-xl">
          <h1 className="text-5xl  text-center text-gray-700 font-bold ">Login</h1>
          
          <form className="mt-6 w-full max-w-[400px]" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
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
              <label htmlFor="password" className="block text-gray-700 font-medium">Password</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                className="w-full p-4 border-b-2 border-gray-300 rounded-lg focus:outline-none"
                required
              />
            </div>

            <div className="flex justify-between mb-6">
              <a href="/PasswordResetForm" className="text-black font-bold hover:text-[#184b5c]">Forgot Password?</a>
              <a href="/register" className="text-[#FED600] hover:text-[#184b5c]">Don't have an account? Register</a>
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
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
