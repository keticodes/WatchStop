const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const { errorHandler } = require("./middleware/errorMiddleware");
const logger = require("./utils/logger");
const config = require("./utils/config");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

const app = express();
app.use(cookieParser());

app.use(cors({ credentials: true, origin: "https://watchstio.onrender.com" }));
app.use(express.json());

app.use((req, res, next) => {
  logger.info(req.path, req.method);
  next();
});

/**
 * @swagger
 * /watches:
 *   get:
 *     summary: Get a list of watches
 *     description: Retrieve a list of watches from your API.
 *     responses:
 *       '200':
 *         description: A JSON array of watches
 */

/**
 * @swagger
 *
 *   get:
 *     summary: Get a list of users
 *     description: Retrieve a list of users from your API.
 *     responses:
 *       '200':
 *         description: A JSON array of users
 */

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Your API",
    version: "1.0.0",
    description: "API documentation for your application",
  },
};

const options = {
  swaggerDefinition,
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.use("/api/watches", require("./routes/watchRouter"));
app.use("/api/users", require("./routes/userRouter"));

app.get("/", (req, res) => res.send("Hello"));

logger.info("connecting to", config.MONGO_URI);
mongoose
  .connect(config.MONGO_URI)
  .then(() => {
    console.log(config.MONGO_URI);
    console.log("connected to DB");
  })
  .catch((error) => {
    logger.error(error);
  });

app.use(errorHandler);

module.exports = app;
