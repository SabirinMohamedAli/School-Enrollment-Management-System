import React, { useState } from 'react';
import axios from 'axios';

const AddStudent = () => {
  const [student, setStudent] = useState({
    fullName: '',
    dateOfBirth: '',
    grade: '',
    contactInformation: {
      parentName: '',
      parentPhoneNumber: '',
      parentEmail: ''
    },
    address: '',
    documents: [],
    enrollmentStatus: 'Pending'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('contactInformation.')) {
      const [_, key] = name.split('.');
      setStudent((prevState) => ({
        ...prevState,
        contactInformation: {
          ...prevState.contactInformation,
          [key]: value
        }
      }));
    } else {
      setStudent((prevState) => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/students', student);
      setStudent({
        fullName: '',
        dateOfBirth: '',
        grade: '',
        contactInformation: {
          parentName: '',
          parentPhoneNumber: '',
          parentEmail: ''
        },
        address: '',
        documents: [],
        enrollmentStatus: 'Pending'
      });
    } catch (error) {
      console.error('Error adding student:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Add Student</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={student.fullName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Date of Birth</label>
          <input
            type="date"
            name="dateOfBirth"
            value={student.dateOfBirth}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Grade</label>
          <input
            type="text"
            name="grade"
            value={student.grade}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Parent Name</label>
          <input
            type="text"
            name="contactInformation.parentName"
            value={student.contactInformation.parentName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Parent Phone Number</label>
          <input
            type="text"
            name="contactInformation.parentPhoneNumber"
            value={student.contactInformation.parentPhoneNumber}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Parent Email</label>
          <input
            type="email"
            name="contactInformation.parentEmail"
            value={student.contactInformation.parentEmail}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Address</label>
          <input
            type="text"
            name="address"
            value={student.address}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded">
          Add Student
        </button>
      </form>
    </div>
  );
};

export default AddStudent;