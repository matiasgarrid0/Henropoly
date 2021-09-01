const { Router } = require("express");
const router = Router();
const auth = require("./auth");
const card = require("./cards");

// Configurar los routers
router.use("/auth", auth);
router.use("/", card);

module.exports = router;
