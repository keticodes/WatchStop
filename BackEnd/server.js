<<<<<<< HEAD
require('dotenv').config();
const connectDB = require('./config/db');
const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRouter');
const watchRoutes = require('./routes/watchRouter');
const PORT = 3001;

// express App
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// test
app.get('/', (req, res) => res.send('Toimii'));

// routes
app.use('/api/users', userRoutes);
app.use('/api/watches', watchRoutes);

// start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// connect to the database
connectDB();
=======
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
>>>>>>> fd1d04842a68224630eeda554612e5c215213078
