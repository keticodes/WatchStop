const jwt = require("jsonwebtoken");
const getUserId = (req) => {
  const user = jwt.decode(req.cookies.token, process.env.SECRETKEY);
  console.log("user:", user);
  return user.userId;
};
module.exports = {
  getUserId,
};
