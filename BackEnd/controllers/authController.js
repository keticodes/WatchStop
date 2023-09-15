const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: "Authentication failed" });
    }

    const token = jwt.sign({ userId: user._id }, "banana", {
      expiresIn: "1h", // Token expiration time
    });

    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred during authentication" });
  }
};

module.exports = { loginUser };
