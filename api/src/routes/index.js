const { Router } = require("express");
const router = Router();
const auth = require("./auth");
const card = require("./cards");
const player = require("./player");
const activeGame = require('./activeGame')


// Configurar los routers
router.use("/auth", auth);
router.use("/cards", card);
router.use('/players', player);
router.use('activeGame', activeGame)


module.exports = router;
