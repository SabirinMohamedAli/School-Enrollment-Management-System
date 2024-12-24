// // Sidebar.js
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Sidebar = () => {
//   return (
//     <div className="flex">
//       <div className="w-64 bg-blue-600 text-white h-screen p-5">
//         <h2 className="text-2xl font-semibold mb-5">School Enrollment</h2>
//         <ul className="space-y-4">
//           <li>
//             <Link to="/dashboard" className="block hover:bg-blue-700 p-2 rounded">
//               Dashboard
//             </Link>
//           </li>
//           <li>
//             <Link to="/students" className="block hover:bg-blue-700 p-2 rounded">
//               Students
//             </Link>
//           </li>
//           <li>
//             <Link to="/enrollment" className="block hover:bg-blue-700 p-2 rounded">
//               Enrollment
//             </Link>
//           </li>
//           <li>
//             <Link to="/settings" className="block hover:bg-blue-700 p-2 rounded">
//               Settings
//             </Link>
//           </li>
//         </ul>
//       </div>
//       <div className="flex-1 p-8">
//         {/* Content goes here */}
//       </div>
//     </div>
//   );
// };

// export default Sidebar;


import React from 'react';

const Sidebar = ({ userRole }) => {
  return (
    <div className="sidebar">
      <ul>
        {userRole === 'Admin' && (
          <>
            <li><a href="/admin/dashboard">Admin Dashboard</a></li>
            <li><a href="/admin/manage-users">Manage Users</a></li>
            {/* Additional Admin Links */}
          </>
        )}
        {userRole === 'User' && (
          <>
            <li><a href="/user/dashboard">User Dashboard</a></li>
            {/* Additional User Links */}
          </>
        )}
        {userRole === 'Student' && (
          <>
            <li><a href="/student/dashboard">My Dashboard</a></li>
            {/* Additional Student Links */}
          </>
        )}
        {userRole === 'Parent' && (
          <>
            <li><a href="/parent/dashboard">My Child's Dashboard</a></li>
            {/* Additional Parent Links */}
          </>
        )}
      </ul>
    </div>
  );
};

const Dashboard = ({ userRole }) => {
  return (
    <div className="dashboard">
      <Sidebar userRole={userRole} />
      <div className="dashboard-content">
        {userRole === 'Admin' && (
          <div>Admin-specific content</div>
        )}
        {userRole === 'Student' && (
          <div>Student-specific content</div>
        )}
        {userRole === 'Parent' && (
          <div>Parent-specific content</div>
        )}
        {/* Render content based on the role */}
      </div>
    </div>
  );
};

export default Dashboard;
