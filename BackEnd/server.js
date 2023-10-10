const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const { errorHandler } = require("./middleware/errorMiddleware");
const logger = require("./utils/logger");
const config = require("./utils/config");

// express app
const app = express();
app.use(cookieParser());

// middleware
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(express.json());

app.use((req, res, next) => {
  logger.info(req.path, req.method);
  next();
});

app.use("/api/watches", require("./routes/watchRouter"));
app.use("/api/users", require("./routes/userRouter"));

app.get("/", (req, res) => res.send("Hello"));

logger.info("connecting to", config.MONGO_DATABASE);
mongoose
  .connect(config.MONGO_DATABASE)
  .then(() => {
    logger.info("connected to db");
  })
  .catch((error) => {
    logger.error(error);
  });

app.use(errorHandler);

module.exports = app;
