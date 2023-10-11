const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const { errorHandler } = require("./middleware/errorMiddleware");
const logger = require("./utils/logger");
const config = require("./utils/config");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

// Express app
const app = express();
app.use(cookieParser());

// Middleware
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(express.json());

app.use((req, res, next) => {
  logger.info(req.path, req.method);
  next();
});

// Define Swagger options
const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Your API',
    version: '1.0.0',
    description: 'API documentation for your application',
  },
};

// Options for the Swagger JSdoc
const options = {
  swaggerDefinition,
  apis: ['./routes/*.js'], // Replace with the path to your actual API route files
};

const swaggerSpec = swaggerJSDoc(options);

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.use("/api/watches", require("./routes/watchRouter"));
app.use("/api/users", require("./routes/userRouter"));

app.get("/", (req, res) => res.send("Hello"));

logger.info("connecting to", config.MONGO_URI);
mongoose
  .connect(config.MONGO_URI)
  .then(() => {
    logger.info("connected to db");
    console.log(config.MONGO_URI);
  })
  .catch((error) => {
    logger.error(error);
  });

app.use(errorHandler);

module.exports = app;
