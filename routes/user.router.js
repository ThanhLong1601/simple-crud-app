const express = require("express");
const User = require("../models/user.model.js");
const router = express.Router();
const {
  createUser,
  loginUser,
  getUserDetails,
  changePassword,
  updateUserInfo,
} = require("../controllers/user.controller.js");

// Sign up
router.post("/", createUser);

// Login
router.post("/login", loginUser);

// Get User Details
router.get("/:id", getUserDetails);

// Change Password
router.put("/:id/change-password", changePassword);

// Update User Info
router.put("/:id/update", updateUserInfo);

module.exports = router;
