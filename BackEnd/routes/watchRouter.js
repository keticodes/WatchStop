const express = require("express");
const {
  getWatches,
  getWatch,
  deleteWatch,
  updateWatch,
  createWatch,
} = require("../controllers/watchController");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Watches
 *   description: Watch management operations
 */

/**
 * @swagger
 * /api/watches:
 *   get:
 *     summary: Get a list of watches
 *     description: Retrieve a list of watches from your API.
 *     tags: [Watches]
 *     responses:
 *       '200':
 *         description: A JSON array of watches
 */
router.get("/", getWatches);

/**
 * @swagger
 * /api/watches/{id}:
 *   get:
 *     summary: Get a watch by ID
 *     description: Retrieve a watch by its unique identifier.
 *     tags: [Watches]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Watch ID to retrieve
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: A JSON object representing the watch
 *       '404':
 *         description: Watch not found
 */
router.get("/:id", getWatch);

/**
 * @swagger
 * /api/watches:
 *   post:
 *     summary: Create a new watch
 *     description: Create a new watch in your API.
 *     tags: [Watches]
 *     responses:
 *       '200':
 *         description: The created watch
 *       '400':
 *         description: Bad request
 */
router.post("/", createWatch);

/**
 * @swagger
 * /api/watches/{id}:
 *   delete:
 *     summary: Delete a watch by ID
 *     description: Delete a watch by its unique identifier.
 *     tags: [Watches]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Watch ID to delete
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Watch deleted
 *       '404':
 *         description: Watch not found
 */
router.delete("/:id", deleteWatch);

/**
 * @swagger
 * /api/watches/{id}:
 *   put:
 *     summary: Update a watch by ID
 *     description: Update a watch by its unique identifier.
 *     tags: [Watches]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Watch ID to update
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Watch updated
 *       '404':
 *         description: Watch not found
 */
router.put("/:id", updateWatch);

module.exports = router;
