const mongoose = require('mongoose');
const { Schema } = mongoose;

const studentSchema = new Schema({
  fullName: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  grade: { type: String, required: true },
  contactInfo: {
    parentName: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
  },
  address: { type: String, required: true },
  enrollmentStatus: { type: String, enum: ['Pending', 'Approved', 'Rejected'], default: 'Pending' },
}, { timestamps: true });

module.exports = mongoose.model('Student', studentSchema);
