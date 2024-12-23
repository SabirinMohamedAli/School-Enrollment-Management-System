// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="flex">
      <div className="w-64 bg-blue-600 text-white h-screen p-5">
        <h2 className="text-2xl font-semibold mb-5">School Enrollment</h2>
        <ul className="space-y-4">
          <li>
            <Link to="/dashboard" className="block hover:bg-blue-700 p-2 rounded">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/students" className="block hover:bg-blue-700 p-2 rounded">
              Students
            </Link>
          </li>
          <li>
            <Link to="/enrollment" className="block hover:bg-blue-700 p-2 rounded">
              Enrollment
            </Link>
          </li>
          <li>
            <Link to="/settings" className="block hover:bg-blue-700 p-2 rounded">
              Settings
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        {/* Content goes here */}
      </div>
    </div>
  );
};

export default Sidebar;
