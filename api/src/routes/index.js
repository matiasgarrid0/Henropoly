const { Router } = require("express");
const router = Router();
const auth = require("./auth");
const card = require("./cards");
const game = require("./game");

// Configurar los routers
router.use("/auth", auth);
router.use("/cards", card);
router.use("/game", game);

module.exports = router;
