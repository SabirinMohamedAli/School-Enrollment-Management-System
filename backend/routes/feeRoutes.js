// routes/feeRoutes.js
const express = require('express');
const { addFee, getFees } = require('../controllers/feeController');
const router = express.Router();

// Routes
router.post('/add', addFee);    // Add fee for a student
router.get('/', getFees);        // Get list of fees for students

module.exports = router;
