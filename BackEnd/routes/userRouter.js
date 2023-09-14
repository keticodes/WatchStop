const express = require("express");
const {
  getUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser,
} = require("../controllers/userController");

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/", createUser);
router.delete("/:id", deleteUser);
router.put("/:id", updateUser);

module.exports = router;
