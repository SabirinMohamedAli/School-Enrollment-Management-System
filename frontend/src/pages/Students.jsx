// import React, { useEffect, useState } from 'react';

// const StudentsPage = () => {
//   const [students, setStudents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch student data when the component mounts
//   useEffect(() => {
//     const fetchStudents = async () => {
//       try {
//         const response = await fetch('/api/students'); // Adjust the API endpoint if necessary
//         if (!response.ok) {
//           throw new Error('Failed to fetch students');
//         }
//         const data = await response.json();
//         setStudents(data);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchStudents();
//   }, []);

//   // If data is loading, show a loading message
//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   // If there's an error, show an error message
//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="container">
//       <h1 className="text-2xl font-bold mb-4">Student List</h1>
//       {students.length === 0 ? (
//         <p>No students found.</p>
//       ) : (
//         <table className="min-w-full table-auto">
//           <thead>
//             <tr>
//               <th className="px-4 py-2 border">Full Name</th>
//               <th className="px-4 py-2 border">Grade</th>
//               <th className="px-4 py-2 border">Parent Name</th>
//               <th className="px-4 py-2 border">Phone</th>
//               <th className="px-4 py-2 border">Email</th>
//               <th className="px-4 py-2 border">Address</th>
//             </tr>
//           </thead>
//           <tbody>
//             {students.map((student) => (
//               <tr key={student._id}>
//                 <td className="px-4 py-2 border">{student.fullName}</td>
//                 <td className="px-4 py-2 border">{student.grade}</td>
//                 <td className="px-4 py-2 border">{student.contactInfo.parentName}</td>
//                 <td className="px-4 py-2 border">{student.contactInfo.phone}</td>
//                 <td className="px-4 py-2 border">{student.contactInfo.email}</td>
//                 <td className="px-4 py-2 border">{student.address}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default StudentsPage;






import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StudentForm = ({ student }) => {
  const [fullName, setFullName] = useState(student ? student.fullName : '');
  const [dateOfBirth, setDateOfBirth] = useState(student ? student.dateOfBirth : '');
  const [grade, setGrade] = useState(student ? student.grade : '');
  const [contactInfo, setContactInfo] = useState(student ? student.contactInfo : { parentName: '', phone: '', email: '' });
  const [address, setAddress] = useState(student ? student.address : '');
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleSubmit = async (e) => {
    e.preventDefault();

    const studentData = { fullName, dateOfBirth, grade, contactInfo, address };

    try {
      if (student) {
        // Update student if editing
        await fetch(`/api/students/${student._id}`, {
          method: 'PUT',
          body: JSON.stringify(studentData),
          headers: { 'Content-Type': 'application/json' },
        });
      } else {
        // Create new student
        await fetch('/api/students', {
          method: 'POST',
          body: JSON.stringify(studentData),
          headers: { 'Content-Type': 'application/json' },
        });
      }
      navigate('/students'); // Navigate to the students list page after saving
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold mb-4">{student ? 'Edit Student' : 'Register Student'}</h3>
      <div className="mb-4">
        <label htmlFor="fullName" className="block text-sm font-medium">Full Name</label>
        <input
          id="fullName"
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="dateOfBirth" className="block text-sm font-medium">Date of Birth</label>
        <input
          id="dateOfBirth"
          type="date"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="grade" className="block text-sm font-medium">Grade/Class</label>
        <input
          id="grade"
          type="text"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="contactInfo" className="block text-sm font-medium">Parent/Guardian Information</label>
        <input
          id="parentName"
          type="text"
          placeholder="Parent Name"
          value={contactInfo.parentName}
          onChange={(e) => setContactInfo({ ...contactInfo, parentName: e.target.value })}
          required
          className="w-full px-4 py-2 border rounded-md mb-2"
        />
        <input
          id="phone"
          type="tel"
          placeholder="Phone Number"
          value={contactInfo.phone}
          onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
          required
          className="w-full px-4 py-2 border rounded-md mb-2"
        />
        <input
          id="email"
          type="email"
          placeholder="Email"
          value={contactInfo.email}
          onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
          required
          className="w-full px-4 py-2 border rounded-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="address" className="block text-sm font-medium">Address</label>
        <input
          id="address"
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded-md"
        />
      </div>

      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4">Save</button>
    </form>
  );
};

export default StudentForm;

