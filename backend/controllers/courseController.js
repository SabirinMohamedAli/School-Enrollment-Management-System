const Course = require('../models/Course');

exports.addCourse = async (req, res) => {
  const { courseName, description, grade, capacity } = req.body;

  try {
    const course = new Course({
      courseName,
      description,
      grade,
      capacity,
    });

    await course.save();
    res.status(201).json({ message: 'Course added successfully!', course });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
