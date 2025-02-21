// import React, { useState, useEffect } from 'react';
// import { Bar, Pie } from 'react-chartjs-2';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';
// import { FaEdit, FaTrash, FaPlus, FaSignOutAlt } from 'react-icons/fa'; // Importing icons
// import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

// ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

// const Dashboard = () => {
//   const [students, setStudents] = useState([]);
//   const navigate = useNavigate(); // Initialize navigate hook

//   // Fetch data for students
//   useEffect(() => {
//     fetchStudents();
//   }, []);

//   const fetchStudents = async () => {
//     const response = await fetch('/api/students');
//     const data = await response.json();
//     setStudents(data);
//   };

//   // Get the total number of enrollments
//   const totalEnrollments = students.length;

//   // Chart data
//   const barChartData = {
//     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
//     datasets: [
//       {
//         label: 'New Enrollments',
//         data: [12, 19, 3, 5, 2],
//         backgroundColor: 'rgba(75, 192, 192, 0.2)',
//         borderColor: 'rgba(75, 192, 192, 1)',
//         borderWidth: 1,
//       },
//     ],
//   };

//   const pieChartData = {
//     labels: ['Admin', 'Student', 'Parent'],
//     datasets: [
//       {
//         data: [10, 60, 30],
//         backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
//         hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
//       },
//     ],
//   };

//   return (
//     <div className="flex">
//       {/* Sidebar */}
//       <div className="w-64 bg-gray-800 text-white h-screen p-5 border-r-2 border-gray-600">
//         <h2 className="text-3xl font-bold mb-6">Admin Dashboard</h2>
//         <nav>
//           <ul>
//             <li><a href="/dashboard" className="block py-2 mb-2">Dashboard</a></li>
//             <li><a href="/Users" className="block py-2 mb-2">Users</a></li>
//             <li><a href="/Courses" className="block py-2 mb-2">Courses</a></li>
//             <li><a href="/Students" className="block py-2 mb-2">Students</a></li>
//             <li><a href="/parents" className="block py-2 mb-2">Parents</a></li>
//             <li><a href="/reports" className="block py-2 mb-2">Reports</a></li>
//             <li><a href="/settings" className="block py-2 mb-2">Settings</a></li>
//             <li><a href="/logout" className="block py-2 mt-6 bg-red-500 text-center rounded hover:bg-red-600">
//               <FaSignOutAlt className="inline mr-2" /> Logout
//             </a></li>
//           </ul>
//         </nav>
//       </div>

//       {/* Main Dashboard Content */}
//       <div className="flex-1 p-8 bg-gray-100 min-h-screen">
//         <div className="flex justify-between items-center mb-8">
//           <h1 className="text-4xl font-semibold">Welcome to the Admin Dashboard</h1>
//           <a href="/logout" className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600">
//             <FaSignOutAlt className="inline mr-2" /> Logout
//           </a>
//         </div>

//         {/* Dashboard Stats */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h2 className="text-2xl font-semibold">Total Students</h2>
//             <p className="text-4xl text-blue-600">{students.length}</p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h2 className="text-2xl font-semibold">Total Enrollments</h2>
//             <p className="text-4xl text-blue-600">{totalEnrollments}</p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h2 className="text-2xl font-semibold">Total Admins</h2>
//             <p className="text-4xl text-blue-600">2</p>
//           </div>
//         </div>

//         {/* Charts Section */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h3 className="text-2xl font-semibold mb-4">New Enrollments (Monthly)</h3>
//             <Bar data={barChartData} />
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h3 className="text-2xl font-semibold mb-4">Role Distribution</h3>
//             <Pie data={pieChartData} />
//           </div>
//         </div>

//         {/* Students Table with Edit, Delete, Add Buttons */}
//         <div className="bg-white p-6 rounded-lg shadow-md mb-8">
//           <h3 className="text-2xl font-semibold mb-4">Students List</h3>
//           <table className="min-w-full table-auto">
//             <thead>
//               <tr className="border-b">
//                 <th className="px-4 py-2">Name</th>
//                 <th className="px-4 py-2">Email</th>
//                 <th className="px-4 py-2">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {students.map((student) => (
//                 <tr key={student.id} className="border-b">
//                   <td className="px-4 py-2">{student.name}</td>
//                   <td className="px-4 py-2">{student.email}</td>
//                   <td className="px-4 py-2 flex space-x-2">
//                     <button className="text-blue-500 hover:text-blue-700">
//                       <FaEdit />
//                     </button>
//                     <button className="text-red-500 hover:text-red-700">
//                       <FaTrash />
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Add New Student Button with Navigation */}
//         <div className="flex justify-end">
//           <button
//             onClick={() => navigate('/students/new')} // Programmatically navigate to the new student page
//             className="bg-blue-500 text-white py-2 px-6 rounded-lg flex items-center hover:bg-blue-600"
//           >
//             <FaPlus className="mr-2" /> Add New Student
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;






















// import React, { useState, useEffect } from 'react';
// import { Bar, Pie } from 'react-chartjs-2';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';
// import {
//   FaEdit, FaTrash, FaPlus, FaSignOutAlt, FaUserGraduate, FaUser, FaBook, FaChartBar, FaCog,
// } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';

// ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

// const Dashboard = () => {
//   const [students, setStudents] = useState([]);
//   const [courses, setCourses] = useState([]);
//   const [users, setUsers] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const [studentsResponse, coursesResponse, usersResponse] = await Promise.all([
//         fetch('/api/students'),
//         fetch('/api/courses'),
//         fetch('/api/users'),
//       ]);

//       if (!studentsResponse.ok) throw new Error(`Students API error: ${studentsResponse.status}`);
//       if (!coursesResponse.ok) throw new Error(`Courses API error: ${coursesResponse.status}`);
//       if (!usersResponse.ok) throw new Error(`Users API error: ${usersResponse.status}`);

//       const studentsData = await studentsResponse.json();
//       const coursesData = await coursesResponse.json();
//       const usersData = await usersResponse.json();

//       console.log('Students Data:', studentsData);
//       console.log('Courses Data:', coursesData);
//       console.log('Users Data:', usersData);

//       setStudents(studentsData);
//       setCourses(coursesData);
//       setUsers(usersData);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const totalStudents = students.length;
//   const totalCourses = courses.length;
//   const totalUsers = users.length;

//   const barChartData = {
//     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
//     datasets: [
//       {
//         label: 'New Enrollments',
//         data: [12, 19, 3, 5, 2],
//         backgroundColor: 'rgba(75, 192, 192, 0.2)',
//         borderColor: 'rgba(75, 192, 192, 1)',
//         borderWidth: 1,
//       },
//     ],
//   };

//   const pieChartData = {
//     labels: ['Admin', 'Student', 'Teacher'],
//     datasets: [
//       {
//         data: [
//           users.filter(user => user.role === 'Admin').length,
//           users.filter(user => user.role === 'Student').length,
//           users.filter(user => user.role === 'Teacher').length,
//         ],
//         backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
//         hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
//       },
//     ],
//   };

//   return (
//     <div className="flex flex-col lg:flex-row">
//       {/* Sidebar */}
//       <div className="bg-gray-800 text-white h-screen p-5 lg:w-64  w-full lg:h-auto lg:fixed lg:overflow-y-auto">
//         <h2 className="text-2xl font-bold mb-6 text-orange-500">Admin Dashboard</h2>
//         <nav>
//           <ul className="space-y-4">
//             <li className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-lg text-orange-500" >
//               <FaUserGraduate className="sidebar-icon" />
//               <a href="/dashboard" className="sidebar-link">Dashboard</a>
//             </li>
//             <li className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-lg ">
//               <FaUser className="sidebar-icon" />
//               <a href="/users" className="sidebar-link">Users</a>
//             </li>
//             <li className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-lg text-orange-500">
//               <FaBook className="sidebar-icon" />
//               <a href="/courses" className="sidebar-link">Courses</a>
//             </li>
//             <li className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-lg">
//               <FaUserGraduate className="sidebar-icon" />
//               <a href="/students" className="sidebar-link">Students</a>
//             </li>
//             <li className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-lg">
//               <FaChartBar className="sidebar-icon" />
//               <a href="/reports" className="sidebar-link">Reports</a>
//             </li>
//             <li className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-lg text-orange-500">
//               <FaCog className="sidebar-icon" />
//               <a href="/settings" className="sidebar-link">Settings</a>
//             </li>
//             <li className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-lg">
//               <FaSignOutAlt className="sidebar-icon" />
//               <a href="/logout" className="sidebar-link">Logout</a>
//             </li>
//           </ul>
//         </nav>
//       </div>

//       {/* Main Dashboard Content */}
//       <div className="flex-1 p-8 bg-gray-100 min-h-screen lg:ml-64">
//         <div className="flex justify-between items-center mb-8">
//           <h1 className="text-4xl font-semibold">Welcome to the Admin Dashboard</h1>
//           <a href="/logout" className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 flex items-center">
//             <FaSignOutAlt className="inline mr-2" /> Logout
//           </a>
//         </div>

//         {/* Dashboard Stats */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
//           <div className="bg-orange-500 p-4 rounded-lg shadow-md text-white text-center">
//             <h2 className="text-2xl font-semibold">Total Students</h2>
//             <p className="text-4xl">{totalStudents}</p>
//           </div>
//           <div className="bg-orange-500 p-4 rounded-lg shadow-md text-white text-center">
//             <h2 className="text-2xl font-semibold">Total Courses</h2>
//             <p className="text-4xl">{totalCourses}</p>
//           </div>
//           <div className="bg-orange-500 p-4 rounded-lg shadow-md text-white text-center">
//             <h2 className="text-2xl font-semibold">Total Users</h2>
//             <p className="text-4xl">{totalUsers}</p>
//           </div>
//         </div>

//         {/* Charts Section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h3 className="text-2xl font-semibold mb-4">New Enrollments (Monthly)</h3>
//             <div className="chart-container">
//               <Bar data={barChartData} options={{ maintainAspectRatio: false }} />
//             </div>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h3 className="text-2xl font-semibold mb-4">Role Distribution</h3>
//             <div className="chart-container">
//               <Pie data={pieChartData} options={{ maintainAspectRatio: false }} />
//             </div>
//           </div>
//         </div>

//         {/* Users Table with Edit, Delete, Add Buttons */}
//         <div className="bg-white p-6 rounded-lg shadow-md mb-8">
//           <h3 className="text-2xl font-semibold mb-4">Users List</h3>
//           <table className="min-w-full table-auto">
//             <thead>
//               <tr className="border-b">
//                 <th className="px-4 py-2">Full Name</th>
//                 <th className="px-4 py-2">Email</th>
//                 <th className="px-4 py-2">Role</th>
//                 <th className="px-4 py-2">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.map((user) => (
//                 <tr key={user._id} className="border-b">
//                   <td className="px-4 py-2">{user.fullName}</td>
//                   <td className="px-4 py-2">{user.email}</td>
//                   <td className="px-4 py-2">{user.role}</td>
//                   <td className="px-4 py-2 flex space-x-2">
//                     <button className="text-blue-500 hover:text-blue-700">
//                       <FaEdit />
//                     </button>
//                     <button className="text-red-500 hover:text-red-700">
//                       <FaTrash />
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Add New User Button with Navigation */}
//         <div className="flex justify-end">
//           <button
//             onClick={() => navigate('/users/new')}
//             className="bg-blue-500 text-white py-2 px-6 rounded-lg flex items-center hover:bg-blue-600"
//           >
//             <FaPlus className="mr-2" /> Add New User
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;















































// import React, { useState, useEffect } from 'react';
// import { Bar, Pie } from 'react-chartjs-2';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';
// import {
//   FaEdit, FaTrash, FaPlus, FaUserGraduate, FaUser, FaBook, FaChartBar, FaBars, FaSignOutAlt,
// } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

// const Dashboard = () => {
//   const [students, setStudents] = useState([]);
//   const [courses, setCourses] = useState([]);
//   const [users, setUsers] = useState([]);
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const [studentsResponse, coursesResponse, usersResponse] = await Promise.all([
//         fetch.get('http://localhost:5000/api/students'),
//         fetch('/api/courses'),
//         fetch('/api/users'),
//       ]);

//       if (!studentsResponse.ok) throw new Error(`Students API error: ${studentsResponse.status}`);
//       if (!coursesResponse.ok) throw new Error(`Courses API error: ${coursesResponse.status}`);
//       if (!usersResponse.ok) throw new Error(`Users API error: ${usersResponse.status}`);

//       const studentsData = await studentsResponse.json();
//       const coursesData = await coursesResponse.json();
//       const usersData = await usersResponse.json();

//       // Log the data for debugging purposes
//       console.log('Fetched Students Data:', studentsData);
//       console.log('Fetched Courses Data:', coursesData);
//       console.log('Fetched Users Data:', usersData);

//       // Check if the data is valid before setting it to state
//       if (Array.isArray(studentsData)) setStudents(studentsData);
//       if (Array.isArray(coursesData)) setCourses(coursesData);
//       if (Array.isArray(usersData)) setUsers(usersData);

//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const totalStudents = students.length;
//   const totalCourses = courses.length;
//   const totalUsers = users.length;

//   const barChartData = {
//     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
//     datasets: [
//       {
//         label: 'New Enrollments',
//         data: [12, 19, 3, 5, 2],
//         backgroundColor: 'rgba(75, 192, 192, 0.2)',
//         borderColor: 'rgba(75, 192, 192, 1)',
//         borderWidth: 1,
//       },
//     ],
//   };

//   const pieChartData = {
//     labels: ['Courses', 'Students', 'Users'],
//     datasets: [
//       {
//         data: [totalCourses, totalStudents, totalUsers],
//         backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
//         hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
//       },
//     ],
//   };

//   return (
//     <div className="flex flex-col lg:flex-row">
//       {/* Sidebar */}
//       <div className={`bg-gray-800 text-white h-screen p-5 lg:w-64 w-full lg:h-auto lg:fixed lg:overflow-y-auto ${sidebarOpen ? 'block' : 'hidden'} lg:block`}>
//         <h2 className="text-3xl font-bold mb-6">Admin Dashboard</h2>
//         <nav>
//           <ul className="space-y-4">
//             <li className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-lg">
//               <FaUserGraduate className="sidebar-icon" />
//               <a href="/dashboard" className="sidebar-link">Dashboard</a>
//             </li>
//             <li className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-lg">
//               <FaUser className="sidebar-icon" />
//               <a href="/users" className="sidebar-link">Users</a>
//             </li>
//             <li className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-lg">
//               <FaBook className="sidebar-icon" />
//               <a href="/courses" className="sidebar-link">Courses</a>
//             </li>
//             <li className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-lg">
//               <FaUserGraduate className="sidebar-icon" />
//               <a href="/students" className="sidebar-link">Students</a>
//             </li>
//             <li className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-lg">
//               <FaChartBar className="sidebar-icon" />
//               <a href="/reports" className="sidebar-link">Reports</a>
//             </li>
//             <li className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-lg">
//               <FaSignOutAlt className="sidebar-icon" />
//               <a href="/logout" className="sidebar-link">Logout</a>
//             </li>
//           </ul>
//         </nav>
//       </div>

//       {/* Hamburger Icon for Mobile View */}
//       <div className="lg:hidden p-4">
//         <FaBars onClick={() => setSidebarOpen(!sidebarOpen)} className="text-2xl cursor-pointer" />
//       </div>

//       {/* Main Dashboard Content */}
//       <div className="flex-1 p-8 bg-gray-100 min-h-screen lg:ml-64">
//         <div className="flex justify-between items-center mb-8">
//           <h1 className="text-4xl font-semibold">Welcome to the Admin Dashboard</h1>
//         </div>

//         {/* Dashboard Stats */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
//           <div className="bg-orange-500 p-4 rounded-lg shadow-md text-white text-center">
//             <h2 className="text-2xl font-semibold">Total Students</h2>
//             <p className="text-4xl">{totalStudents}</p>
//           </div>
//           <div className="bg-orange-500 p-4 rounded-lg shadow-md text-white text-center">
//             <h2 className="text-2xl font-semibold">Total Courses</h2>
//             <p className="text-4xl">{totalCourses}</p>
//           </div>
//           <div className="bg-orange-500 p-4 rounded-lg shadow-md text-white text-center">
//             <h2 className="text-2xl font-semibold">Total Users</h2>
//             <p className="text-4xl">{totalUsers}</p>
//           </div>
//         </div>

//         {/* Charts Section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h3 className="text-2xl font-semibold mb-4">New Enrollments (Monthly)</h3>
//             <div className="chart-container">
//               <Bar data={barChartData} options={{ maintainAspectRatio: false }} />
//             </div>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h3 className="text-2xl font-semibold mb-4">Distribution</h3>
//             <div className="chart-container">
//               <Pie data={pieChartData} options={{ maintainAspectRatio: false }} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



//last


//parnt reprt
import React, { useState, useEffect } from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import {
  FaBars,
  FaUserGraduate,
  FaUser,
  FaBook,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa"; // Add these imports
import { useNavigate } from "react-router-dom";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

const Dashboard = () => {
  const [totalCounts, setTotalCounts] = useState({
    totalUsers: 0,
    totalStudents: 0,
    totalCourses: 0,
  });
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchTotalCounts();
  }, []);

  const fetchTotalCounts = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/total-counts");
      const data = await response.json();
      setTotalCounts(data);
    } catch (error) {
      console.error("Error fetching total counts:", error);
    }
  };

  const { totalUsers, totalStudents, totalCourses } = totalCounts;

  const barChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "New Enrollments",
        data: [12, 19, 3, 5, 2],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const pieChartData = {
    labels: ["Courses", "Students", "Users"],
    datasets: [
      {
        data: [totalCourses, totalStudents, totalUsers],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Sidebar */}
      <div
        className={`bg-gray-800  text-white h-screen p-5 lg:w-64 w-full lg:h-auto lg:fixed lg:overflow-y-auto ${
          sidebarOpen ? "block" : "hidden"
        } lg:block`}
      >
        <h2 className="text-2xl font-bold mb-6 text-orange-500">
          Admin Dashboard
        </h2>
        <nav>
          <ul className="space-y-4 h-screen">
            <li className="flex items-center space-x-3 hover:bg-orange-500 p-2 rounded-lg">
              <FaUserGraduate className="sidebar-icon" />
              <a href="/dashboard" className="sidebar-link">
                Dashboard
              </a>
            </li>
            <li className="flex items-center space-x-3 hover:bg-orange-500 p-2 rounded-lg">
              <FaUser className="sidebar-icon" />
              <a href="/users" className="sidebar-link">
                Users
              </a>
            </li>
            <li className="flex items-center space-x-3 hover:bg-orange-500 p-2 rounded-lg">
              <FaBook className="sidebar-icon" />
              <a href="/courses" className="sidebar-link">
                Courses
              </a>
            </li>
            <li className="flex items-center space-x-3 hover:bg-orange-500 p-2 rounded-lg">
              <FaUserGraduate className="sidebar-icon" />
              <a href="/students" className="sidebar-link">
                Students
              </a>
            </li>
            <li className="flex items-center space-x-3 hover:bg-orange-500 p-2 rounded-lg">
              <FaCog className="text-xl" />
              <a href="/settings" className="sidebar-link">
                Settings
              </a>
            </li>
            <li className="flex items-center space-x-3 hover:bg-orange-500 p-2 rounded-lg">
              <FaSignOutAlt className="sidebar-icon" />
              <a href="/" className="sidebar-link">
                Logout
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Hamburger Icon for Mobile View */}
      <div className="lg:hidden p-4">
        <FaBars
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-2xl cursor-pointer"
        />
      </div>

      {/* Main Dashboard Content */}
      <div className="flex-1 lg:ml-64 p-8 bg-gray-100 min-h-screen">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-semibold">
            Welcome To the Admin Dashboard
          </h1>
        </div>

        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-orange-500 p-4 rounded-lg shadow-md text-white text-center">
            <h2 className="text-2xl font-semibold">Total Students</h2>
            <p className="text-4xl">{totalStudents}</p>
          </div>
          <div className="bg-orange-500 p-4 rounded-lg shadow-md text-white text-center">
            <h2 className="text-2xl font-semibold">Total Courses</h2>
            <p className="text-4xl">{totalCourses}</p>
          </div>
          <div className="bg-orange-500 p-4 rounded-lg shadow-md text-white text-center">
            <h2 className="text-2xl font-semibold">Total Users</h2>
            <p className="text-4xl">{totalUsers}</p>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">
              New Enrollments (Monthly)
            </h3>
            <div className="chart-container">
              <Bar
                data={barChartData}
                options={{ maintainAspectRatio: false }}
              />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Distribution</h3>
            <div className="chart-container">
              <Pie
                data={pieChartData}
                options={{ maintainAspectRatio: false }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

