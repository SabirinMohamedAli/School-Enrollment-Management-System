// routes/feeRoutes.js
const express = require('express');
const router = express.Router();
const FeeStructure = require('../models/FeeStructure');
// const Payment = require('../models/Payment');

// Get fee structure
router.get('/structure', async (req, res) => {
  try {
    const feeStructure = await FeeStructure.find();
    res.json(feeStructure);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create fee structure
router.post('/structure', async (req, res) => {
  const feeStructure = new FeeStructure({
    grade: req.body.grade,
    program: req.body.program,
    amount: req.body.amount
  });

  try {
    const newFeeStructure = await feeStructure.save();
    res.status(201).json(newFeeStructure);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get payments
router.get('/payments', async (req, res) => {
  try {
    const payments = await Payment.find().populate('studentId');
    res.json(payments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create payment
router.post('/payments', async (req, res) => {
  const payment = new Payment({
    studentId: req.body.studentId,
    status: req.body.status,
    amount: req.body.amount
  });

  try {
    const newPayment = await payment.save();
    res.status(201).json(newPayment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;




































































// // routes/fee.js
// const express = require('express');
// const router = express.Router();
// const FeeStructure = require('../models/FeeStructure');
// const Payment = require('../models/Payment');

// // Get fee structure
// router.get('/structure', async (req, res) => {
//   try {
//     const feeStructure = await FeeStructure.find();
//     res.json(feeStructure);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // Create fee structure
// router.post('/structure', async (req, res) => {
//   const feeStructure = new FeeStructure({
//     grade: req.body.grade,
//     program: req.body.program,
//     amount: req.body.amount
//   });

//   try {
//     const newFeeStructure = await feeStructure.save();
//     res.status(201).json(newFeeStructure);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// // Get payments
// router.get('/payments', async (req, res) => {
//   try {
//     const payments = await Payment.find().populate('studentId');
//     res.json(payments);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // Create payment
// router.post('/payments', async (req, res) => {
//   const payment = new Payment({
//     studentId: req.body.studentId,
//     status: req.body.status,
//     amount: req.body.amount
//   });

//   try {
//     const newPayment = await payment.save();
//     res.status(201).json(newPayment);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// module.exports = router;



































// // // routes/feeRoutes.js
// // const express = require('express');
// // const { addFee, getFees } = require('../controllers/feeController');
// // const router = express.Router();

// // // Routes
// // router.post('/add', addFee);    // Add fee for a student
// // router.get('/', getFees);        // Get list of fees for students

// // module.exports = router;
