// models/Course.js
const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  courseName: {
    type: String,
    required: [true, 'Please add a course name'],
  },
  description: {
    type: String,
  },
  grade: {
    type: String,
    required: [true, 'Please add the grade for the course'],
  },
  capacity: {
    type: Number,
    required: true,
  },
  enrolledStudents: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student',
    },
  ],
});

module.exports = mongoose.model('Course', CourseSchema);
