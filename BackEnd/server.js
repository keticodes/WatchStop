require("dotenv").config();
const connectDB = require("./config/db");
const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRouter");
const WatchRoutes = require("./routes/watchRouter");

// express app
const app = express();

const port = 3001;

connectDB();

// middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("API Running!"));

// routes
app.use("/api/users", userRoutes);
app.use("/api/watches", WatchRoutes);

app.listen(port, () => console.log(`Server started on port ${port}`));
