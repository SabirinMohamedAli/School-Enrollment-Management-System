import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEdit, FaTrash } from 'react-icons/fa';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  
  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get('/api/students');
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/students/${id}`);
      fetchStudents();
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Student List</h1>
      <table className="min-w-full bg-white">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="w-1/3 p-4">Full Name</th>
            <th className="w-1/3 p-4">Grade</th>
            <th className="w-1/3 p-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id}>
              <td className="border px-4 py-2">{student.fullName}</td>
              <td className="border px-4 py-2">{student.grade}</td>
              <td className="border px-4 py-2 flex justify-around">
                <button className="text-blue-500 hover:text-blue-700">
                  <FaEdit />
                </button>
                <button onClick={() => handleDelete(student._id)} className="text-red-500 hover:text-red-700">
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;