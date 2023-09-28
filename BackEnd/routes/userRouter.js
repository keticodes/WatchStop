const express = require("express");
const {
  getUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser,
  loginUser,
  getProfile,
} = require("../controllers/userController");
const { authenticateUser } = require("../middleware/authMiddleware"); // Import the authentication middleware

const router = express.Router();

router.post("/", createUser);
router.post("/login", loginUser);
router.get("/", authenticateUser, getUsers);
router.delete("/:id", authenticateUser, deleteUser);
router.put("/:id", authenticateUser, updateUser);
router.get("/profile", authenticateUser, getProfile);

module.exports = router;
