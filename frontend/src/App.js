import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login"; // Import Login page
import Registration from "./pages/Registration"; // Import Registration page
import Home from "./pages/Home"; // Import Home page if needed
import Dashboard from "./pages/Dashboard"; // Import Admin Dashboard page
import "./App.css"; // Optional for additional global styles

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home route */}
        <Route path="/" element={<Home />} />

        {/* Login route */}
        <Route path="/login" element={<Login />} />

        {/* Registration route */}
        <Route path="/register" element={<Registration />} />

        {/* Admin Dashboard route */}
         <Route path="/Dashboard" element={<Dashboard />} />

        
      </Routes>
    </Router>
  );
};

export default App;
