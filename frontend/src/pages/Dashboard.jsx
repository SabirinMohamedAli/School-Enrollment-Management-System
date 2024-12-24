import React, { useState, useEffect } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';
import { FaEdit, FaTrash, FaPlus, FaSignOutAlt } from 'react-icons/fa'; // Importing icons

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const Dashboard = () => {
  const [students, setStudents] = useState([]);

  // Fetch data for students
  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const response = await fetch('/api/students');
    const data = await response.json();
    setStudents(data);
  };

  // Get the total number of enrollments
  const totalEnrollments = students.length;

  // Chart data
  const barChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'New Enrollments',
        data: [12, 19, 3, 5, 2],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const pieChartData = {
    labels: ['Admin', 'Student', 'Parent'],
    datasets: [
      {
        data: [10, 60, 30],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white h-screen p-5 border-r-2 border-gray-600">
        <h2 className="text-3xl font-bold mb-6">Admin Dashboard</h2>
        <nav>
          <ul>
            <li><a href="/dashboard" className="block py-2 mb-2">Dashboard</a></li>
            <li><a href="/users" className="block py-2 mb-2">Users</a></li>
            <li><a href="/courses" className="block py-2 mb-2">Courses</a></li>
            <li><a href="/students" className="block py-2 mb-2">Students</a></li>
            <li><a href="/parents" className="block py-2 mb-2">Parents</a></li>
            <li><a href="/reports" className="block py-2 mb-2">Reports</a></li>
            <li><a href="/settings" className="block py-2 mb-2">Settings</a></li>
            <li><a href="/logout" className="block py-2 mt-6 bg-red-500 text-center rounded hover:bg-red-600">
              <FaSignOutAlt className="inline mr-2" /> Logout
            </a></li>
          </ul>
        </nav>
      </div>

      {/* Main Dashboard Content */}
      <div className="flex-1 p-8 bg-gray-100 min-h-screen">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-semibold">Welcome to the Admin Dashboard</h1>
          <a href="/logout" className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600">
            <FaSignOutAlt className="inline mr-2" /> Logout
          </a>
        </div>

        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold">Total Students</h2>
            <p className="text-4xl text-blue-600">{students.length}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold">Total Enrollments</h2>
            <p className="text-4xl text-blue-600">{totalEnrollments}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold">Total Admins</h2>
            <p className="text-4xl text-blue-600">2</p>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">New Enrollments (Monthly)</h3>
            <Bar data={barChartData} />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Role Distribution</h3>
            <Pie data={pieChartData} />
          </div>
        </div>

        {/* Students Table with Edit, Delete, Add Buttons */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h3 className="text-2xl font-semibold mb-4">Students List</h3>
          <table className="min-w-full table-auto">
            <thead>
              <tr className="border-b">
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id} className="border-b">
                  <td className="px-4 py-2">{student.name}</td>
                  <td className="px-4 py-2">{student.email}</td>
                  <td className="px-4 py-2 flex space-x-2">
                    <button className="text-blue-500 hover:text-blue-700">
                      <FaEdit />
                    </button>
                    <button className="text-red-500 hover:text-red-700">
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Add New Student Button */}
        <div className="flex justify-end">
          <button className="bg-blue-500 text-white py-2 px-6 rounded-lg flex items-center hover:bg-blue-600">
            <FaPlus className="mr-2" /> Add New Student
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
