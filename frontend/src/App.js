import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login"; 
import Registration from "./pages/Registration"; 
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard"; 
import StudentForm from './components/StudentForm';
import StudentsTable from './components/StudentsTable';
import StudentsPage from './components/StudentsPage';  // Diiwaankaaga students

import "./App.css";

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
        
        {/* Students routes */}
        <Route path="/students" element={<StudentsPage />} />
        <Route path="/students/edit/:id" element={<StudentForm />} />
        <Route path="/students/add" element={<StudentForm />} /> {/* Add student route */}
        
        {/* Optionally, a route for the students table */}
        <Route path="/students/list" element={<StudentsTable />} />
      </Routes>
    </Router>
  );
};

export default App;
