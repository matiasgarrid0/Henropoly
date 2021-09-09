const { Router } = require("express");
const router = Router();
const { User } = require("./../db");
const { dinamicDB, newGame } = require("./../controllers/DataTempora");

//route de crear partida
router.post("/RegisterGame", (req, res, next) => {
  const { ID, players } = req.body;
  //crear partida y asociar jugadores
  //const response = await juego.create
  const resultNewGame = newGame(ID, players);
  res.json({ resultNewGame });
});
router.post("/leer", (req, res, next) => {
  res.json({ dinamicDB });
});

module.exports = router;
