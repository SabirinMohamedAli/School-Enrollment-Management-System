import React, { useState, useEffect } from 'react';

const AddStudentForm = () => {
  const [fullName, setFullName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [grade, setGrade] = useState('');
  const [parentName, setParentName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [students, setStudents] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/User");

      const data = await response.json();
      setStudents(data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const studentData = { fullName, dateOfBirth, grade, parentName, phone, email, address };

    try {
      const response = await fetch('http://localhost:5000/api/student', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(studentData),
      });

      if (response.ok) {
        setMessage('Student added successfully!');
        fetchStudents();
        resetForm();
      } else {
        setMessage('Failed to add student. Please try again later.');
      }
    } catch (error) {
      setMessage('Failed to add student. Please try again later.');
      console.error('Error adding student:', error);
    }
  };

  const resetForm = () => {
    setFullName('');
    setDateOfBirth('');
    setGrade('');
    setParentName('');
    setPhone('');
    setEmail('');
    setAddress('');
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-gray-700 mb-6">Add Student</h1>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
        <div className="space-y-4">
          <div className="flex flex-col">
            <label className="text-lg font-semibold text-gray-600">Full Name</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="mt-2 p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-lg font-semibold text-gray-600">Date of Birth</label>
            <input
              type="date"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              className="mt-2 p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-lg font-semibold text-gray-600">Grade</label>
            <input
              type="text"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              className="mt-2 p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-lg font-semibold text-gray-600">Parent Name</label>
            <input
              type="text"
              value={parentName}
              onChange={(e) => setParentName(e.target.value)}
              className="mt-2 p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-lg font-semibold text-gray-600">Phone</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-2 p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-lg font-semibold text-gray-600">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-lg font-semibold text-gray-600">Address</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="mt-2 p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 mt-4">
            Add Student
          </button>
        </div>
      </form>

      {message && (
        <div className="mt-4 text-center text-lg text-green-500">
          {message}
        </div>
      )}

      <h2 className="text-2xl font-semibold text-gray-700 mt-8">Students List</h2>
      {students.length === 0 ? (
        <p className="mt-4 text-center text-gray-500">No students found.</p>
      ) : (
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 border border-gray-300">Full Name</th>
                <th className="px-4 py-2 border border-gray-300">Date of Birth</th>
                <th className="px-4 py-2 border border-gray-300">Grade</th>
                <th className="px-4 py-2 border border-gray-300">Parent Name</th>
                <th className="px-4 py-2 border border-gray-300">Phone</th>
                <th className="px-4 py-2 border border-gray-300">Email</th>
                <th className="px-4 py-2 border border-gray-300">Address</th>
                <th className="px-4 py-2 border border-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student._id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border border-gray-300">{student.fullName}</td>
                  <td className="px-4 py-2 border border-gray-300">{new Date(student.dateOfBirth).toLocaleDateString()}</td>
                  <td className="px-4 py-2 border border-gray-300">{student.grade}</td>
                  <td className="px-4 py-2 border border-gray-300">{student.parentName}</td>
                  <td className="px-4 py-2 border border-gray-300">{student.phone}</td>
                  <td className="px-4 py-2 border border-gray-300">{student.email}</td>
                  <td className="px-4 py-2 border border-gray-300">{student.address}</td>
                  <td className="px-4 py-2 border border-gray-300">
                    <button className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">Edit</button>
                    <button className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 ml-2">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AddStudentForm;
