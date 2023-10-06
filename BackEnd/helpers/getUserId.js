const getUserId = (req) => {
  const user = jwt.decode(req.cookies.Authorization, process.env.SECRETKEY);
  return user.userId;
};
module.exports = {
  getUserId,
};
