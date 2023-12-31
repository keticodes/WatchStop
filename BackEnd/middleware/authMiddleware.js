const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const authenticateUser = (req, res, next) => {
  cookieParser()(req, res, () => {});
  const token = req.cookies.token;

  if (token) {
    try {
      jwt.verify(token, process.env.JWT_SECRET);
      next();
    } catch (error) {
      return res.status(401).json({ message: error.message });
    }
  } else {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = { authenticateUser };
