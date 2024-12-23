// const express = require('express');
// const {
//   createEnrollment,
//   getEnrollments,
// } = require('../controllers/enrollmentController');
// const router = express.Router();

// router.post('/', createEnrollment);
// router.get('/', getEnrollments);

// module.exports = router;
// routes/enrollmentRoutes.js
const express = require('express');
const { createEnrollment, getEnrollments } = require('../controllers/enrollmentController');
const router = express.Router();

router.post('/add', createEnrollment);
router.get('/', getEnrollments);

module.exports = router;
