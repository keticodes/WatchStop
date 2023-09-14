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