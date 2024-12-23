// server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const studentRoutes = require('./routes/studentRoutes');
const courseRoutes = require('./routes/courseRoutes');
const feeRoutes = require('./routes/feeRoutes');
const enrollmentRoutes = require('./routes/enrollmentRoutes');
const authRoutes = require('./routes/authRoutes');
const helmet = require('helmet'); // Assuming you are using helmet for security headers
const cors = require('cors'); // For handling Cross-Origin Resource Sharing

// Initialize dotenv
dotenv.config();

// Initialize express app
const app = express();

// Middleware for security
app.use(helmet()); // Helmet for securing HTTP headers
app.use(cors()); // Enable Cross-Origin Resource Sharing (CORS)
app.use(express.json()); // Middleware to parse incoming JSON requests

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit the process on failure to connect
  });

// Routes
app.use('/api/students', studentRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/enrollments', enrollmentRoutes);
app.use('/api/fees', feeRoutes);
app.use('/api/auth', authRoutes);

// Set up the server to listen on a specified port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
