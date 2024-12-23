import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Students from './pages/Students';
import Enrollment from './pages/Enrollment';
import Settings from './pages/Settings';
import Login from './pages/LoginForm';
import { getAuthToken } from './utils/auth';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is authenticated (using token or other logic)
    const token = getAuthToken();
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <Router>
      <div className="flex">
        {/* Sidebar */}
        {isAuthenticated && <Sidebar />}
        {/* Main content area */}
        <div className="flex-1">
          <Routes>
            {/* Redirect root path ("/") to login or dashboard */}
            <Route
              path="/"
              element={isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/login" />}
            />
            <Route
              path="/dashboard"
              element={<PrivateRoute element={<Dashboard />} isAuthenticated={isAuthenticated} />}
            />
            <Route
              path="/students"
              element={<PrivateRoute element={<Students />} isAuthenticated={isAuthenticated} />}
            />
            <Route
              path="/enrollment"
              element={<PrivateRoute element={<Enrollment />} isAuthenticated={isAuthenticated} />}
            />
            <Route
              path="/settings"
              element={<PrivateRoute element={<Settings />} isAuthenticated={isAuthenticated} />}
            />
            <Route
              path="/login"
              element={!isAuthenticated ? <Login /> : <Navigate to="/dashboard" />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
