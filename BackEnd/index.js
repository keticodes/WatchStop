const app = require("./server");
const http = require("http");
const config = require("./utils/config");
const logger = require("./utils/logger");

/**
 * @swagger
 * /api/watches:
 *   get:
 *     summary: Get a list of watches
 *     description: Retrieve a list of watches from your API.
 *     responses:
 *       '200':
 *         description: A JSON array of watches
 *   post:
 *     summary: Create a new watch
 *     description: Create a new watch in your API.
 *     responses:
 *       '200':
 *         description: The created watch
 *       '400':
 *         description: Bad request
 */
/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get a list of users
 *     description: Retrieve a list of users from your API.
 *     responses:
 *       '200':
 *         description: A JSON array of users
 *   post:
 *     summary: Create a new user
 *     description: Create a new user in your API.
 *     responses:
 *       '200':
 *         description: The created user
 *       '400':
 *         description: Bad request
 */

const server = http.createServer(app);

server.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`);
  console.log(`Server running on port ${config.PORT}`);

  const swaggerHost = config.HOST || "localhost"; 
  const swaggerPort = config.PORT || 5173; 
  const swaggerRoute = `http://${swaggerHost}:${swaggerPort}/api-docs`;

  logger.info(`Swagger documentation available at: ${swaggerRoute}`);
});
