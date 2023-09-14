const mongoose = require("mongoose");
const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_DATABASE);
  console.log(`Connected to database`);
};
module.exports = connectDB;
