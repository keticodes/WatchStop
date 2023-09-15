const User = require("../models/userModel");
const mongoose = require("mongoose");

const createUser = async (req, res) => {
  const { firstname, lastname, email, phonenumber, password } = req.body;
  if (!firstname || !lastname || !email || !phonenumber || !password) {
    return res
      .status(400)
      .json({ message: "Please provide all the required information" });
  }
  try {
    const user = await User.create({
      firstname,
      lastname,
      email,
      phonenumber,
      password,
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: "The user could not be created" });
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

const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      return res
        .status(404)
        .json({ message: "The user with the specified ID does not exist" });
    }
    res.status(200).json(user);
  } catch (error) {
    res
      .status(500)
      .json({ message: "The user information could not be retrieved" });
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
  getUser,
  createUser,
  deleteUser,
  updateUser,
};
