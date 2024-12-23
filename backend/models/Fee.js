// models/Fee.js
const mongoose = require('mongoose');

const FeeSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true,
  },
  grade: {
    type: String,
    required: true,
  },
  feeAmount: {
    type: Number,
    required: true,
  },
  paymentStatus: {
    type: String,
    enum: ['Pending', 'Paid', 'Overdue'],
    default: 'Pending',
  },
  receipt: {
    type: String, // URL or path to the receipt document
  },
});

module.exports = mongoose.model('Fee', FeeSchema);
