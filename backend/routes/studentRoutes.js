// routes/studentRoutes.js
const express = require('express');
const { addStudent, getStudents, updateEnrollmentStatus } = require('../controllers/studentController');
const router = express.Router();

// Create a new student (registration)
router.post('/add', addStudent);

// Get all students
router.get('/', getStudents);

// Update enrollment status (e.g., Approved, Rejected)
router.put('/enrollment/:id', updateEnrollmentStatus);

module.exports = router;
