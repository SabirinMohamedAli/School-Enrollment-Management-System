// controllers/studentController.js
const Student = require('../models/Student');

exports.addStudent = async (req, res) => {
  const { name, dateOfBirth, grade, contactInfo, address, enrollmentStatus, documents } = req.body;

  try {
    const student = new Student({
      name,
      dateOfBirth,
      grade,
      contactInfo,
      address,
      enrollmentStatus,
      documents,
    });
    await student.save();
    res.status(201).json({ message: 'Student added successfully!', student });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateEnrollmentStatus = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(
      req.params.id,
      { enrollmentStatus: req.body.enrollmentStatus },
      { new: true }
    );
    if (!student) return res.status(404).json({ message: 'Student not found' });

    res.json({ message: 'Enrollment status updated', student });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
