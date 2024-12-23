const mongoose = require('mongoose');

const EnrollmentSchema = new mongoose.Schema({
  studentName: {
    type: String,
    required: [true, 'Please add a student name'],
  },
  course: {
    type: String,
    required: [true, 'Please add a course name'],
  },
  enrollmentDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Enrollment', EnrollmentSchema);
