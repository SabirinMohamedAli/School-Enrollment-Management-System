// routes/authRoutes.js
const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const router = express.Router();

// Register User
router.post('/register', async (req, res) => {
  const { fullName, email, password, role } = req.body;

  // Check if the user already exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({ message: 'User already exists' });
  }

  try {
    const user = new User({
      fullName,
      email,
      password,
      role,
    });

    // Save the user to the database
    await user.save();

    res.status(201).json({
      message: 'User registered successfully',
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Login User
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Check if the user exists
  const user = await User.findOne({ email }).select('+password');
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Compare password with the hashed password
  const isMatch = await user.matchPassword(password);
  if (!isMatch) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Generate JWT token
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });

  res.status(200).json({
    message: 'Login successful',
    token,
    user: {
      id: user._id,
      fullName: user.fullName,
      email: user.email,
      role: user.role,
    },
  });
});

// Request Password Reset
router.post('/password-reset', async (req, res) => {
  const { email } = req.body;

  // Find the user by email
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: 'User not found' });
  }

  // Generate a password reset token
  const resetToken = crypto.randomBytes(32).toString('hex');
  user.resetToken = resetToken;
  user.resetTokenExpiration = Date.now() + 3600000; // 1 hour expiration

  await user.save();

  // Send reset token via email
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const resetLink = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;
  const mailOptions = {
    to: email,
    subject: 'Password Reset Request',
    text: `You requested a password reset. Click the link to reset your password: ${resetLink}`,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      return res.status(500).json({ message: 'Error sending email' });
    }
    res.status(200).json({ message: 'Password reset email sent' });
  });
});

// Reset Password
router.post('/reset-password/:token', async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  // Find user by reset token
  const user = await User.findOne({
    resetToken: token,
    resetTokenExpiration: { $gt: Date.now() },
  });
  if (!user) {
    return res.status(400).json({ message: 'Invalid or expired token' });
  }

  // Hash the new password
  user.password = password;
  user.resetToken = undefined;
  user.resetTokenExpiration = undefined;

  await user.save();
  res.status(200).json({ message: 'Password reset successfully' });
});

module.exports = router;
