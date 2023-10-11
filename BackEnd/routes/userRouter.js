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
const { authenticateUser } = require("../middleware/authMiddleware");
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management operations
 */

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Create a new user
 *     description: Create a new user in your API.
 *     tags: [Users]
 *     responses:
 *       '200':
 *         description: The created user
 *       '400':
 *         description: Bad request
 */
router.post("/", createUser);

/**
 * @swagger
 * /api/users/login:
 *   post:
 *     summary: Authenticate a user
 *     description: Authenticate a user with login credentials.
 *     tags: [Users]
 *     responses:
 *       '200':
 *         description: User authenticated and token generated
 *       '401':
 *         description: Unauthorized
 */
router.post("/login", loginUser);

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get a list of users
 *     description: Retrieve a list of users from your API.
 *     tags: [Users]
 *     responses:
 *       '200':
 *         description: A JSON array of users
 */
router.get("/", authenticateUser, getUsers);

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Delete a user by ID
 *     description: Delete a user by their unique identifier.
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: User ID to delete
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: User deleted
 *       '401':
 *         description: Unauthorized
 *       '404':
 *         description: User not found
 */
router.delete("/:id", authenticateUser, deleteUser);

/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: Update a user by ID
 *     description: Update a user by their unique identifier.
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: User ID to update
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: User updated
 *       '401':
 *         description: Unauthorized
 *       '404':
 *         description: User not found
 */
router.put("/:id", authenticateUser, updateUser);

/**
 * @swagger
 * /api/users/profile:
 *   get:
 *     summary: Get user profile
 *     description: Retrieve the profile of the authenticated user.
 *     tags: [Users]
 *     responses:
 *       '200':
 *         description: A JSON object representing the user profile
 *       '401':
 *         description: Unauthorized
 */
router.get("/profile", authenticateUser, getProfile);

module.exports = router;
