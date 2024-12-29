// import React, { useState, useEffect } from "react";

// const UsersTable = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [editingUser, setEditingUser] = useState(null);
//   const [updatedUser, setUpdatedUser] = useState({ fullName: "", email: "", role: "" });

//   // Fetch users from backend
//   const fetchUsers = async () => {
//     try {
//       const response = await fetch("http://localhost:5000/api/User"); // Sax URL
//       const data = await response.json();
//       setUsers(data);
//       setLoading(false);
//     } catch (error) {
//       setError("Error fetching users.");
//     }
//   };
  

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   // Handle user deletion
//   const handleDelete = async (userId) => {
//     try {
//       await fetch(`http://localhost:5000/api/User/${userId}`, {
//         method: "DELETE",
//       });
//       setUsers(users.filter((user) => user._id !== userId));
//     } catch (error) {
//       setError("Failed to delete user.");
//     }
//   };

//   // Handle user update
//   const handleEdit = (user) => {
//     setEditingUser(user._id);
//     setUpdatedUser({ fullName: user.fullName, email: user.email, role: user.role });
//   };

//   const handleUpdate = async () => {
//     try {
//       const response = await fetch(`http://localhost:5000/api/User/${editingUser}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(updatedUser),
//       });
//       if (response.ok) {
//         const updated = await response.json();
//         setUsers(users.map((user) => (user._id === updated._id ? updated : user)));
//         setEditingUser(null);
//       } else {
//         setError("Failed to update user.");
//       }
//     } catch (error) {
//       setError("Failed to update user.");
//     }
//   };

//   return (
//     <div className="p-8">
//       <h1 className="text-2xl font-bold mb-6">Users Management</h1>
//       {error && <div className="text-red-500 mb-4">{error}</div>}
//       {loading ? (
//         <div>Loading...</div>
//       ) : (
//         <table className="table-auto w-full border-collapse border border-gray-300">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border border-gray-300 p-2">Full Name</th>
//               <th className="border border-gray-300 p-2">Email</th>
//               <th className="border border-gray-300 p-2">Role</th>
//               <th className="border border-gray-300 p-2">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user) => (
//               <tr key={user._id} className="text-center">
//                 <td className="border border-gray-300 p-2">
//                   {editingUser === user._id ? (
//                     <input
//                       type="text"
//                       value={updatedUser.fullName}
//                       onChange={(e) => setUpdatedUser({ ...updatedUser, fullName: e.target.value })}
//                       className="border border-gray-300 rounded p-1"
//                     />
//                   ) : (
//                     user.fullName
//                   )}
//                 </td>
//                 <td className="border border-gray-300 p-2">
//                   {editingUser === user._id ? (
//                     <input
//                       type="email"
//                       value={updatedUser.email}
//                       onChange={(e) => setUpdatedUser({ ...updatedUser, email: e.target.value })}
//                       className="border border-gray-300 rounded p-1"
//                     />
//                   ) : (
//                     user.email
//                   )}
//                 </td>
//                 <td className="border border-gray-300 p-2">
//                   {editingUser === user._id ? (
//                     <select
//                       value={updatedUser.role}
//                       onChange={(e) => setUpdatedUser({ ...updatedUser, role: e.target.value })}
//                       className="border border-gray-300 rounded p-1"
//                     >
//                       <option value="Admin">Admin</option>
//                       <option value="Parent">Parent</option>
//                       <option value="Student">Student</option>
//                     </select>
//                   ) : (
//                     user.role
//                   )}
//                 </td>
//                 <td className="border border-gray-300 p-2">
//                   {editingUser === user._id ? (
//                     <>
//                       <button
//                         onClick={handleUpdate}
//                         className="text-white bg-green-500 px-4 py-1 rounded hover:bg-green-700 transition mr-2"
//                       >
//                         Save
//                       </button>
//                       <button
//                         onClick={() => setEditingUser(null)}
//                         className="text-white bg-gray-500 px-4 py-1 rounded hover:bg-gray-700 transition"
//                       >
//                         Cancel
//                       </button>
//                     </>
//                   ) : (
//                     <>
//                       <button
//                         onClick={() => handleEdit(user)}
//                         className="text-white bg-yellow-500 px-4 py-1 rounded hover:bg-yellow-700 transition mr-2"
//                       >
//                         Edit
//                       </button>
//                       <button
//                         onClick={() => handleDelete(user._id)}
//                         className="text-white bg-red-500 px-4 py-1 rounded hover:bg-red-700 transition"
//                       >
//                         Delete
//                       </button>
//                     </>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default UsersTable;


import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
import { useHistory } from 'react-router-dom'; // If you're using React Router for navigation

const Users = () => {
  const [users, setUsers] = useState([]);
  const history = useHistory(); // Assuming you're using React Router

  useEffect(() => {
    // Fetch users from the API
    fetch('/api/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error)); // Handle errors
  }, []);

  const deleteUser = (id) => {
    // Send DELETE request to the server
    fetch(`/api/users/${id}`, { method: 'DELETE' })
      .then(() => setUsers(users.filter(user => user._id !== id))) // Use _id if you're using MongoDB
      .catch(error => console.error('Error deleting user:', error)); // Handle errors
  };

  const handleAddUser = () => {
    // Navigate to the Add User page or show a modal
    history.push('/add-user'); // Replace with the actual route for adding users
  };

  return (
    <div>
      <h2 className="text-2xl mb-4">Users</h2>
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}> {/* Use _id for MongoDB */}
              <td>{user.fullName}</td> {/* Assuming fullName is the correct field */}
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button><FaEdit /></button>
                <button onClick={() => deleteUser(user._id)}><FaTrash /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="bg-blue-500 text-white p-2 rounded" onClick={handleAddUser}>
        <FaPlus /> Add New User
      </button>
    </div>
  );
};

export default Users;

