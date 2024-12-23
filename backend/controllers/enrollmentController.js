const Enrollment = require('../models/Enrollment');

// Create Enrollment
exports.createEnrollment = async (req, res, next) => {
  try {
    const enrollment = await Enrollment.create(req.body);
    res.status(201).json({
      success: true,
      data: enrollment,
    });
  } catch (err) {
    next(err);
  }
};

// Get All Enrollments
exports.getEnrollments = async (req, res, next) => {
  try {
    const enrollments = await Enrollment.find();
    res.status(200).json({
      success: true,
      data: enrollments,
    });
  } catch (err) {
    next(err);
  }
};
