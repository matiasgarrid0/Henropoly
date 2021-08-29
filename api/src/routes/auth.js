const { Router } = require("express");
const router = Router();
const { AUTH_SECRET, AUTH_EXPIRES, AUTH_ROUNDS } = process.env;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { User } = require("./../db");
const { checkToken } = require("./../controllers/Auth");

//ruta de registro
router.post("/signUp", async (req, res, next) => {
  try {
    const { username, password, email } = req.body;
  const passwordCrypt = bcrypt.hashSync(password, parseInt(AUTH_ROUNDS));
  const newUser = await User.create({
    username: username,
    email: email,
    password: passwordCrypt,
  });
  let token = jwt.sign({ user: newUser }, AUTH_SECRET, {
    expiresIn: AUTH_EXPIRES,
  });
  return res.status(201).json({ token: token });
  } catch (error) {
    next(error);
  }
});

//login
router.post("/signIn", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const userResult = await User.findOne({ where: { username: username } });
    if (userResult === null) {
      return res.status(404).json({ error: "username does not exist" });
    }
    if (bcrypt.compareSync(password, userResult.password)) {
      let token = jwt.sign({ user: userResult }, AUTH_SECRET, {
        expiresIn: AUTH_EXPIRES,
      });
      return res.status(200).json({ token: token });
    } else {
      return res.status(404).json({ error: "the password is wrong" });
    }
  } catch (error) {
    next(error);
  }
});

//check the token and generate a new token to renew your time
router.post("/check", checkToken, async (req, res, next) => {
  try {
    const userResult = await User.findOne({
      where: { username: req.user.user.username },
    });
    let token = jwt.sign({ user: userResult }, AUTH_SECRET, {
      expiresIn: AUTH_EXPIRES,
    });
    return res
      .status(200)
      .json({
        token: token,
        data: { username: userResult.username, email: userResult.email },
      });
  } catch (error) {
    next(error);
  }
});
module.exports = router;
