const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const validator = require('validator');


// Create token
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d", // Token expiry
  });
};

// @desc Register a new user
// @route POST /api/users/register
// @access Public
export const registerUser = asyncHandler(async (req, res) => {
  const { fullName, email, password, role } = req.body;
  if (!fullName || !email || !password || !role) {
    return res.status(400).json({
      status: false,
      message: "All fields are required",
    });
  }

  try {
    // Check if user already exists
    const exists = await User.findOne({ email });
    if (exists) {
      return res.status(400).json({ success: false, message: "User already exists" });
    }

    // Validate email format & strong password
    if (!validator.isEmail(email)) {
      return res.status(400).json({ success: false, message: "Please enter a valid email" });
    }

    // Hashing user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
      role,
    });
    const user = await newUser.save();

    const token = createToken(user._id);

    res.status(201).json({
      success: true,
      user: {
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// @desc Authenticate a user
// @route POST /api/users/login
// @access Public
export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Validate input
  if (!email || !password) {
    res.status(400);
    throw new Error("Please provide both email and password");
  }

  // Check for user
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      _id: user.id,
      fullName: user.fullName,
      email: user.email,
      role: user.role,
      token: createToken(user.id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// @desc Get user profile
// @route GET /api/users/profile
// @access Private
export const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);

  if (user) {
    res.status(200).json({
      _id: user.id,
      fullName: user.fullName,
      email: user.email,
      role: user.role,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// @desc Update user profile
// @route PUT /api/users/profile
// @access Private
export const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);

  if (user) {
    user.fullName = req.body.fullName || user.fullName;
    user.email = req.body.email || user.email;

    // Hash the new password if provided
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(req.body.password, salt);
    }

    const updatedUser = await user.save();

    res.status(200).json({
      _id: updatedUser.id,
      fullName: updatedUser.fullName,
      email: updatedUser.email,
      role: updatedUser.role,
      token: createToken(updatedUser.id),
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// @desc Logout user
// @route GET /api/users/logout
// @access Private
export const logoutUser = asyncHandler(async (req, res) => {
  try {
    res.status(200).json({ status: true, message: "User logged out" });
  } catch (err) {
    res.status(500).json({ status: false, message: err.message });
  }
});

//* FORGOT PASSWORD (Generate OTP)
export const forgotPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;

  // Find user by email
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({ status: false, message: "User not found" });
  }

  // Generate OTP and expiration time
  const otp = Math.floor(100000 + Math.random() * 900000).toString(); // Generate 6-digit OTP
  const otpExpirationTime = Date.now() + 10 * 60 * 1000; // OTP valid for 10 minutes
  user.resetToken = otp;
  user.resetTokenExpiry = otpExpirationTime;

  // Save OTP to the database
  await user.save();

  // Log OTP and expiration time for debugging purposes
  console.log(`Generated OTP: ${otp}`);
  console.log(`OTP expiration time: ${new Date(otpExpirationTime).toISOString()}`);

  // Send OTP via email
  await sendPasswordResetEmail(user, otp); // Now sending OTP instead of token

  res.status(200).json({
    status: true,
    message: "OTP sent to your email",
  });
});

//* RESET PASSWORD (Verify OTP and reset password)
export const resetPassword = asyncHandler(async (req, res) => {
  const { otp, newPassword } = req.body;

  try {
    // Find the user by OTP
    const user = await User.findOne({
      resetToken: otp, // Check if OTP matches
    });

    if (!user) {
      return res.status(400).json({
        status: false,
        message: "Invalid OTP",
      });
    }

    // Check if OTP has expired
    if (user.resetTokenExpiry < Date.now()) {
      return res.status(400).json({
        status: false,
        message: "Expired OTP",
      });
    }

    // Validate the new password (8 characters, must include letters and numbers)
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(newPassword)) {
      return res.status(400).json({
        status: false,
        message:
          "Password must be at least 8 characters long and contain both letters and numbers.",
      });
    }

    // Hash the new password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(newPassword, salt);

    // Clear the OTP and expiration fields
    user.resetToken = undefined;
    user.resetTokenExpiry = undefined;

    // Save the updated user data
    await user.save();

    // Respond with success
    res.status(200).json({
      status: true,
      message: "Password has been reset successfully",
    });
  } catch (error) {
    console.error("Error resetting password:", error);
    res.status(500).json({
      status: false,
      message: "Server error while resetting password",
    });
  }
});
