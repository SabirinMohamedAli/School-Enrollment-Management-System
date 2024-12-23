const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/authRoutes');

dotenv.config();

// Connect to the database
connectDB();

const app = express();

// Middleware
app.use(express.json()); // To parse JSON bodies


// Routes
app.use('/api/users', userRoutes);

// Error Handling Middleware
// app.use((err, req, res, next) => {
//   const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
//   res.status(statusCode);
//   res.json({
//     message: err.message,
//     stack: process.env.NODE_ENV === 'production' ? null : err.stack,
//   });
// });

// Start the server
const PORT = 5000;
app.listen(PORT, () =>
  console.log(`Server running in mode on port ${PORT}`)
);
