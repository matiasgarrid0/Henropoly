const { Router } = require("express");
const router = Router();
const auth = require("./auth");
const card = require("./cards");

// Configurar los routers
router.use("/auth", auth);
router.use("/cards", card);


module.exports = router;
