// controllers/feeController.js
const Fee = require('../models/Fee');

exports.addFee = async (req, res) => {
  const { student, grade, feeAmount, paymentStatus, receipt } = req.body;

  try {
    const fee = new Fee({
      student,
      grade,
      feeAmount,
      paymentStatus,
      receipt,
    });

    await fee.save();
    res.status(201).json({ message: 'Fee added successfully!', fee });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getFees = async (req, res) => {
  try {
    const fees = await Fee.find().populate('student');
    res.json(fees);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
