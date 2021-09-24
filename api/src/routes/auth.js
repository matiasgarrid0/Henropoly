const { Router } = require("express");
const router = Router();
const { AUTH_SECRET, AUTH_EXPIRES, AUTH_ROUNDS } = process.env;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { User } = require("./../db");
const { checkToken } = require("../controllers/Auth");
const {
  validateUsername,
  validatePassword,
  validateEmail,
} = require("./../controllers/checkData");
const { sendCode } = require("./../controllers/email");

//route de register
router.post("/signUp", async (req, res, next) => {
  try {
    const { username, password, email } = req.body;
    if (username && password && email) {
      if (
        validateUsername(username) &&
        validatePassword(password) &&
        validateEmail(email)
      ) {
        const passwordCrypt = bcrypt.hashSync(password, parseInt(AUTH_ROUNDS));
        const newUser = await User.create({
          username: username,
          email: email,
          password: passwordCrypt,
        });
        const userResponse = await User.findOne({
          where: { ID: newUser.ID },
          attributes: { exclude: ["password"] },
        });
        let token = jwt.sign({ user: userResponse }, AUTH_SECRET, {
          expiresIn: AUTH_EXPIRES,
        });
        return res.status(201).json({ user: userResponse, token: token });
      }
    }
    return res
      .status(404)
      .json({ error: "There is incomplete or invalid data." });
  } catch (error) {
    next(error);
  }
});

//route login
router.post("/signIn", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (username && password) {
      if (validateUsername(username) && validatePassword(password)) {
        const userResult = await User.findOne({
          where: { username: username },
        });
        if (userResult === null) {
          return res.status(200).json({ status:2, text: "El usuario no existe." });
        }
        if (bcrypt.compareSync(password, userResult.password)) {
          const userResponse = await User.findOne({
            where: { ID: userResult.ID },
            attributes: { exclude: ["password"] },
          });
          let token = jwt.sign({ user: userResponse }, AUTH_SECRET, {
            expiresIn: AUTH_EXPIRES,
          });
          return res.status(200).json({status:1, user: userResponse, token: token });
        } else {
          return res.status(200).json({status:2, text: "La Password es incorrecta." });
        }
      }
    }
    return res
      .status(200)
      .json({ status:2, text: "Los datos estan inclompletos o invalidos." });
  } catch (error) {
    next(error);
  }
});

//check the token and generate a new token to renew your time
router.post("/check", checkToken, async (req, res, next) => {
  try {
    const { user } = req.user;
    if (!user) return res.status(404).json({ error: "Bad Request." });
    const userResponse = await User.findOne({
      where: { ID: user.ID },
      attributes: { exclude: ["password"] },
    });
    let token = jwt.sign({ user: userResponse }, AUTH_SECRET, {
      expiresIn: AUTH_EXPIRES,
    });
    return res.status(200).json({ user: userResponse, token: token });
  } catch (error) {
    next(error);
  }
});
/*
//generate email code
router.post("/restore", async (req, res, next) => {
  try {
    const { email } = req.body;
    if (email && validateEmail(email)) {
      const userResponse = await User.findOne({
        where: { email: email },
      });
      if (userResponse === null) {
        return res.status(404).json({ error: "The email is not registered." });
      }
      const emailCode = bcrypt
        .hashSync(email, parseInt(AUTH_ROUNDS))
        .substring(0, 19);
      await User.update(
        { restoreCode: emailCode },
        { where: { ID: userResponse.ID } }
      );
      await sendCode(userResponse.email, emailCode);
      const userResponseDos = await User.findOne({
        where: { email: email },
      });
      return res.status(200).json({ s: userResponseDos });
    }
    return res
      .status(404)
      .json({ error: "There is incomplete or invalid data." });
  } catch (error) {
    next(error);
  }
});

//verify email code
*/
module.exports = router;
