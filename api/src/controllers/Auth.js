const jwt = require("jsonwebtoken");
const { AUTH_SECRET } = process.env;
const checkToken = (req, res, next) => {
  if (!req.headers.authorization) {
    return res
      .status(403)
      .send({ success: false, message: "No Token Provided." });
  }
  const token = req.headers.authorization.replace("Basic ", "");
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
//middleware para Traer token al front y usarlo JoseB
const checkTokenBySocket = (token) => {
	return new Promise(async (resolve, reject) => {
		jwt.verify(token, AUTH_SECRET, (error, decoded) => {
			if (error) {
				resolve(null);
			} else {
				resolve(decoded);
			}
		});
	});
};

module.exports = {
  checkTokenBySocket,
  checkToken,
};
