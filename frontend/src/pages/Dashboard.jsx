// 



import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

// Register the chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Dashboard = () => {
  // Data for the Bar Chart
  const barChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'], // Example months
    datasets: [
      {
        label: 'New Enrollments',
        data: [20, 30, 15, 25, 40, 60], // Example data
        backgroundColor: '#4CAF50',
      },
    ],
  };

  // Data for the Pie Chart
  const pieChartData = {
    labels: ['Admin', 'Parent', 'Student'],
    datasets: [
      {
        data: [10, 50, 40], // Example data (Admin: 10%, Parent: 50%, Student: 40%)
        backgroundColor: ['#FF5733', '#FFC300', '#28A745'],
        borderColor: '#fff',
        borderWidth: 1,
      },
    ],
  };

  // Example student data for the table
  const students = [
    { id: 1, name: 'Ahmed Ali', grade: 'A', email: 'ahmed.ali@example.com' },
    { id: 2, name: 'Fatima Hassan', grade: 'B', email: 'fatima.hassan@example.com' },
    { id: 3, name: 'Mohamed Noor', grade: 'A', email: 'mohamed.noor@example.com' },
    { id: 4, name: 'Layla Abdi', grade: 'C', email: 'layla.abdi@example.com' },
    { id: 5, name: 'Omar Yusuf', grade: 'B', email: 'omar.yusuf@example.com' },
  ];

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* Dashboard Header */}
      <h1 className="text-4xl font-semibold mb-4">Welcome to the Admin Dashboard</h1>
      <p className="text-xl mb-8">Here you can manage the students and enrollment data.</p>

      {/* Dashboard Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">Total Students</h2>
          <p className="text-4xl text-blue-600">1,200</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">Total Enrollments</h2>
          <p className="text-4xl text-blue-600">900</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">Total Admins</h2>
          <p className="text-4xl text-blue-600">5</p>
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

      {/* Students Table */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-4">Student List</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">ID</th>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Grade</th>
                <th className="py-2 px-4 border-b">Email</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id} className="text-center">
                  <td className="py-2 px-4 border-b">{student.id}</td>
                  <td className="py-2 px-4 border-b">{student.name}</td>
                  <td className="py-2 px-4 border-b">{student.grade}</td>
                  <td className="py-2 px-4 border-b">{student.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
