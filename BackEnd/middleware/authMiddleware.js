const jwt = require("jsonwebtoken");

const authenticateUser = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "Authentication failed" });
  }

  try {
    const decoded = jwt.verify(token, "banana"); //This is no good. Should create stronger secret key later.
    req.user = decoded; // Store the user object in the request for later use
    next(); // Continue to the next middleware or route
  } catch (error) {
    return res.status(401).json({ message: "Authentication failed" });
  }
};

module.exports = { authenticateUser };
