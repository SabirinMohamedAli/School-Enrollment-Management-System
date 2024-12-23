const express = require("express");
const {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile,
  logoutUser,
  forgotPassword,
  resetPassword,
} = require("../controllers/authController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// @desc Register a new user
// @route POST /api/users/register
router.post("/register", registerUser);

// @desc Login a user
// @route POST /api/users/login
router.post("/login", loginUser);

// @desc Get user profile
// @route GET /api/users/profile
// @access Private
router.get("/profile", protect, getUserProfile);

// @desc Update user profile
// @route PUT /api/users/profile
// @access Private
router.put("/profile", protect, updateUserProfile);

// @desc Logout user
// @route GET /api/users/logout
// @access Private
router.get("/logout", protect, logoutUser);

// @desc Forgot Password
// @route POST /api/users/forgot-password
router.post("/forgot-password", forgotPassword);

// @desc Reset Password
// @route POST /api/users/reset-password
router.post("/reset-password", resetPassword);

module.exports = router;
