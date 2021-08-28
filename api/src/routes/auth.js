const { Router } = require("express");
//const { User } = require("../db.js");
const router = Router();

router.post("/", (req, res, next) => {
  //const { username, password } = req.body;
  return res.status(200).json({ msj: "exito" });
});
