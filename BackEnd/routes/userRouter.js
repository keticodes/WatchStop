const express = require("express");
const {
  getUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser,
} = require("../controllers/userController");
const { authenticateUser } = require("../middleware/authMiddleware"); // Import the authentication middleware
const { loginUser } = require("../controllers/authController");

const router = express.Router();

// Apply the authentication middleware to protect routes
router.get("/", authenticateUser, getUsers);
router.get("/:id", authenticateUser, getUser);
router.post("/", createUser);
router.post("/login", loginUser); // Add a new route for user login
router.delete("/:id", authenticateUser, deleteUser);
router.put("/:id", authenticateUser, updateUser);

module.exports = router;
