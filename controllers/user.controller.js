const User = require("../models/user.model.js");
const bcrypt = require("bcrypt");

const createUser = async (req, res) => {
  const { name, email, password, gender, birthdate } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "Email already exists. Please use a different email.",
      });
    }

    const passwordString = password.toString();
    const saltRounds = 10;

    const hashedPassword = await bcrypt.hash(passwordString, saltRounds);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      gender,
      birthdate,
    });
    await newUser.save();
    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid Password" });

    res.json({ message: "Login successful", userId: user._id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUserDetails = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");
    if (!user) return res.status(400).json({ message: "User not found" });

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const changePassword = async (req, res) => {
  const { oldPassword, newPassword, confirmPassword } = req.body;
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Old password is incorrect" });

    if (newPassword !== confirmPassword)
      return res
        .status(400)
        .json({ message: "New password and confirmation do not match" });

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();

    res.json({ message: "Password changed successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateUserInfo = async (req, res) => {
  const { name, gender, birthdate } = req.body;
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(400).json({ message: "User not found" });

    if (name) user.name = name;
    if (gender) user.gender = gender;
    if (birthdate) user.birthdate = birthdate;

    await user.save();
    res.json({ message: "User info updated successfully", user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createUser,
  loginUser,
  getUserDetails,
  changePassword,
  updateUserInfo,
};
