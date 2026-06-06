const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

// Generate Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists!",
      });
    }

    const hashedPass = await bcryptjs.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPass,
    });

    return res.status(201).json({
      success: true,
      message: "User created",
      u: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (e) {
    console.error("Error creating user :", e);
    return res.status(500).json({
      success: false,
      message: "Server error!",
    });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found!",
      });
    }

    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid Credentials",
      });
    }

    return res.json({
      success: true,
      message: "Login successful",
      u: {
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      },
    });
  } catch (e) {
    console.error("Error :", e);
    return res.status(500).json({
      success: false,
      message: "Server error!",
    });
  }
};
