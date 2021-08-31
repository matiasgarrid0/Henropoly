const { Router } = require("express");
const router = Router();
const auth = require("./auth");

// Configurar los routers
router.use("/auth", auth);

module.exports = router;
