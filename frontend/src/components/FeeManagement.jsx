import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaUserGraduate, FaUser, FaBook, FaCog, FaSignOutAlt, FaBars } from 'react-icons/fa';

const FeeManagement = () => {
  const [feeStructures, setFeeStructures] = useState([]);
  const [payments, setPayments] = useState([]);
  const [newFeeStructure, setNewFeeStructure] = useState({ grade: '', program: '', amount: '' });
  const [newPayment, setNewPayment] = useState({ studentId: '', status: 'Pending', amount: '' });
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    fetchFeeStructures();
    fetchPayments();
  }, []);

  const fetchFeeStructures = async () => {
    try {
      const response = await axios.get('/api/fee/structure');
      setFeeStructures(response.data);
    } catch (error) {
      console.error('Error fetching fee structures:', error);
    }
  };

  const fetchPayments = async () => {
    try {
      const response = await axios.get('/api/fee/payments');
      setPayments(response.data);
    } catch (error) {
      console.error('Error fetching payments:', error);
    }
  };

  const handleFeeStructureSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/fee/structure', newFeeStructure);
      setFeeStructures([...feeStructures, response.data]);
      setNewFeeStructure({ grade: '', program: '', amount: '' });
    } catch (error) {
      console.error('Error creating fee structure:', error);
    }
  };

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/fee/payments', newPayment);
      setPayments([...payments, response.data]);
      setNewPayment({ studentId: '', status: 'Pending', amount: '' });
    } catch (error) {
      console.error('Error creating payment:', error);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Sidebar */}
      <div className={`bg-gray-800 text-white p-5 lg:w-64 w-full lg:h-auto lg:fixed lg:overflow-y-auto ${sidebarOpen ? 'block' : 'hidden'} lg:block`}>
        <h2 className="text-3xl font-bold mb-6">Admin Dashboard</h2>
        <nav>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-lg">
              <FaUserGraduate className="sidebar-icon" />
              <a href="/dashboard" className="sidebar-link">Dashboard</a>
            </li>
            <li className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-lg">
              <FaUser className="sidebar-icon" />
              <a href="/users" className="sidebar-link">Users</a>
            </li>
            <li className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-lg">
              <FaBook className="sidebar-icon" />
              <a href="/courses" className="sidebar-link">Courses</a>
            </li>
            <li className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-lg">
              <FaUserGraduate className="sidebar-icon" />
              <a href="/students" className="sidebar-link">Students</a>
            </li>
            <li className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-lg">
              <FaBook className="sidebar-icon" />
              <a href="/feemanagement" className="sidebar-link">Fee Management</a>
            </li>
            <li className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-lg">
              <FaCog className="sidebar-icon" />
              <a href="/settings" className="sidebar-link">Settings</a>
            </li>
            <li className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-lg">
              <FaSignOutAlt className="sidebar-icon" />
              <a href="/logout" className="sidebar-link">Logout</a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Hamburger Icon for Mobile View */}
      <div className="lg:hidden p-4">
        <FaBars onClick={() => setSidebarOpen(!sidebarOpen)} className="text-2xl cursor-pointer" />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 bg-white lg:ml-64">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-semibold text-orange-500">Fee Management</h1>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-orange-500">Fee Structures</h2>
          <form onSubmit={handleFeeStructureSubmit} className="mb-4">
            <div className="mb-2">
              <input
                type="text"
                placeholder="Grade"
                value={newFeeStructure.grade}
                onChange={(e) => setNewFeeStructure({ ...newFeeStructure, grade: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-2">
              <input
                type="text"
                placeholder="Program"
                value={newFeeStructure.program}
                onChange={(e) => setNewFeeStructure({ ...newFeeStructure, program: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-2">
              <input
                type="number"
                placeholder="Amount"
                value={newFeeStructure.amount}
                onChange={(e) => setNewFeeStructure({ ...newFeeStructure, amount: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded">
              Add Fee Structure
            </button>
          </form>
          <ul className="list-disc pl-5">
            {feeStructures.map((structure) => (
              <li key={structure._id} className="mb-2">
                {structure.grade} - {structure.program}: {structure.amount}
              </li>
            ))}
          </ul>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-orange-500">Payments</h2>
          <form onSubmit={handlePaymentSubmit} className="mb-4">
            <div className="mb-2">
              <input
                type="text"
                placeholder="Student ID"
                value={newPayment.studentId}
                onChange={(e) => setNewPayment({ ...newPayment, studentId: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-2">
              <select
                value={newPayment.status}
                onChange={(e) => setNewPayment({ ...newPayment, status: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded"
                required
              >
                <option value="Pending">Pending</option>
                <option value="Paid">Paid</option>
                <option value="Overdue">Overdue</option>
              </select>
            </div>
            <div className="mb-2">
              <input
                type="number"
                placeholder="Amount"
                value={newPayment.amount}
                onChange={(e) => setNewPayment({ ...newPayment, amount: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded">
              Add Payment
            </button>
          </form>
          <ul className="list-disc pl-5">
            {payments.map((payment) => (
              <li key={payment._id} className="mb-2">
                {payment.studentId} - {payment.status}: {payment.amount}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default FeeManagement;