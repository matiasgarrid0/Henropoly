const { Router } = require("express");
const router = Router();
const auth = require("./auth");
const card = require("./cards");
const player = require("./player")

// Configurar los routers
router.use("/auth", auth);
router.use("/cards", card);
router.use('/players', player)


module.exports = router;
