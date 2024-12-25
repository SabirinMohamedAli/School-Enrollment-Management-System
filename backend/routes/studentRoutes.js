// const express = require('express');
// const {
//   createStudent,
//   getStudents,
//   updateStudent,
//   deleteStudent,
// } = require('../controllers/studentController');

// const router = express.Router();

// // Route to get all students
// router.get('/', getStudents);

// // Route to create a new student
// router.post('/', createStudent);

// // Route to update a student by ID
// router.put('/:id', updateStudent);

// // Route to delete a student by ID
// router.delete('/:id', deleteStudent);

// module.exports = router;



// routes/studentRoutes.js
const express = require('express');
const Student = require('../models/Student');  // Import the Student model
const router = express.Router();

// Add student route
router.post('/', async (req, res) => {
  const { fullName, dateOfBirth, grade, parentName, phone, email, address } = req.body;
  
  try {
    const newStudent = new Student({
      fullName,
      dateOfBirth,
      grade,
      parentName,
      phone,
      email,
      address,
    });

    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (error) {
    console.error('Error adding student:', error);  // Log the error for debugging
    res.status(500).json({ message: 'Failed to add student. Please try again later.' });
  }
});

// Get all students route
router.get('/', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch students.' });
  }
});

module.exports = router;

