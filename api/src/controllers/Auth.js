const jwt = require("jsonwebtoken");
const { AUTH_SECRET } = process.env;
const checkToken = (req, res, next) => {
  if (!req.headers.token) {
    return res
      .status(403)
      .send({ success: false, message: "No Token Provided." });
  }
  const token = req.headers.token;
  try {
    var decoded = jwt.verify(token, AUTH_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res
      .status(403)
      .send({ success: false, message: "Failed to authenticate user." });
  }
};

module.exports = {
  checkToken,
};
