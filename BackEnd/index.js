const app = require("./server");
const http = require("http");
const config = require("./utils/config");
const logger = require("./utils/logger");

const server = http.createServer(app);

server.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`);

  const swaggerHost = config.HOST || "localhost"; // Default to "localhost" if HOST is not specified in config
  const swaggerPort = config.PORT || 5173; // Default to 5173 if PORT is not specified in config
  const swaggerRoute = `http://${swaggerHost}:${swaggerPort}/api-docs`;

  logger.info(`Swagger documentation available at: ${swaggerRoute}`);
});
