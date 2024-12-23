// models/Student.js
const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add the student\'s name'],
  },
  dateOfBirth: {
    type: Date,
    required: [true, 'Please add the student\'s date of birth'],
  },
  grade: {
    type: String,
    required: [true, 'Please add the grade/class'],
  },
  contactInfo: {
    parentName: {
      type: String,
      required: true,
    },
    parentContact: {
      type: String,
      required: true,
    },
  },
  address: {
    type: String,
    required: true,
  },
  enrollmentStatus: {
    type: String,
    enum: ['Pending', 'Approved', 'Rejected'],
    default: 'Pending',
  },
  documents: {
    birthCertificate: {
      type: String, // File URL or path
    },
    transferCertificate: {
      type: String, // File URL or path
    },
  },
});

module.exports = mongoose.model('Student', StudentSchema);
