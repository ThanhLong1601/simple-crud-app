const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter user name"],
    },

    email: {
      type: String,
      required: [true, "Please enter your email"],
      unique: true,
      match: [/\S+@\S+\.\S+/, "Please enter a valid email"],
    },

    password: {
      type: String,
      required: [true, "Please enter your password"],
    },

    gender: {
      type: String,
      required: [true, "Please enter your gender"],
    },

    birthdate: {
      type: Date,
      required: [true, "Please enter your birthdate"],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
