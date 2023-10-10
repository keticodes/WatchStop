require("dotenv").config();

const PORT = process.env.PORT;
const MONGO_DATABASE =
  process.env.NODE_ENV === "test"
    ? process.env.MONG_URI_TEST
    : process.env.MONGO_DATABASE;

module.exports = {
  MONGO_DATABASE,
  PORT,
};
