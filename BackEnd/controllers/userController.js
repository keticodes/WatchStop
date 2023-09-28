const User = require("../models/userModel");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const createToken = (id, res) => {
  const token = jwt.sign({ userId: id }, process.env.JWT_SECRET);
  if (res) {
    res.cookie("Authorization", token, {
      httpOnly: true,
      expires: new Date(Date.now() + 3600000),
    });
    return token;
  }
};

const getUserId = (req) => {
  const user = jwt.decode(req.cookies.Authorization, process.env.SECRETKEY);
  return user.userId;
};

const createUser = async (req, res) => {
  const { firstname, lastname, email, phonenumber, password } = req.body;
  if (!firstname || !lastname || !email || !phonenumber || !password) {
    return res
      .status(404)
      .json({ message: "Please provide all the required information" });
  }
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const user = await User.create({
      firstname,
      lastname,
      email,
      phonenumber,
      password,
    });
    const token = createToken(user._id, res);
    delete user.password;
    res.status(201).json({ message: "User created successfully", user, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: "Login error" });
    }

    const token = createToken(user._id, res);

    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred during login" });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find({}).sort({ createdAt: -1 });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      message: "The users information could not be retrieved",
    });
  }
};
const getProfile = async (req, res) => {
  try {
    const userId = getUserId(req);
    console.log(userId);
    const user = await User.findById(userId).select("-password");
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndDelete(id);
    res.status(200).json(user);
  } catch (error) {
    res
      .status(404)
      .json({ message: "The user with the specified ID does not exist" });
  }
};
const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, bio } = req.body;

  try {
    const user = await User.findById(id);
    if (!user) {
      return res
        .status(404)
        .json({ message: "The user with the specified ID does not exist" });
    }
    if (!name || !bio) {
      return res
        .status(400)
        .json({ message: "Please provide name and bio for the user" });
    }
    user.name = name;
    user.bio = bio;
    await user.save();

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while updating the user" });
  }
};
module.exports = {
  getUsers,
  createUser,
  deleteUser,
  updateUser,
  loginUser,
  getProfile,
};
