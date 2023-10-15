const jwt = require("jsonwebtoken");
const createToken = (id, res) => {
  const token = jwt.sign({ userId: id }, process.env.JWT_SECRET);
  if (res) {
    res.cookie("token", token, {
      httpOnly: true,
      expires: new Date(Date.now() + 3600000),
    });
    return token;
  }
};
module.exports = {
  createToken,
};
