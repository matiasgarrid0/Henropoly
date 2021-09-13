const { Router } = require("express");
const router = Router();
const {
  playersInGame,
  playersInHold,
  waitingRoom,
  gameRoom
} = require("./../controllers/DBGame");
//route de crear partida
router.get("/", (req, res, next) => {
  res.json({ playersInGame, playersInHold, waitingRoom, gameRoom });
});
module.exports = router;
