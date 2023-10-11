const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const { createToken } = require("../helpers/createToken");
const { getUserId } = require("../helpers/getUserId");

const createUser = async (req, res) => {
  const { firstname, lastname, email, phonenumber, password } = req.body;
  if (!firstname || !lastname || !email || !phonenumber || !password) {
    return res
      .status(400)
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
    res.status(201).json({
      message: "User created successfully",
      user,
      token,
      user_id: user._id,
    });
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

    res.status(200).json({ token, user_id: user._id });
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
    const user = await User.findById(userId).select("-password");
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
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
  console.log("userid from params:", id);
  const { firstname, lastname, email, phonenumber, password } = req.body;

  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    if (email !== user.email) {
      const emailExist = await User.findOne({ email });

      if (emailExist) {
        return res.status(400).json({ message: "Email already exists" });
      }
    }
    user.firstname = firstname || user.firstname;
    user.lastname = lastname || user.lastname;
    user.email = email || user.email;
    user.phonenumber = phonenumber || user.phonenumber;
    if (password) {
      user.password = password;
    }
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Error updating user" });
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
