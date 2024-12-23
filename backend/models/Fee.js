// models/Fee.js
const mongoose = require('mongoose');

const feeSchema = new Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
  grade: { type: String, required: true },
  amount: { type: Number, required: true },
  paymentStatus: { type: String, enum: ['Pending', 'Paid', 'Overdue'], default: 'Pending' },
  invoiceUrl: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Fee', feeSchema);
