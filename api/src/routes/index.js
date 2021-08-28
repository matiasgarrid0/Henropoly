const { Router } = require('express');
const router = Router();

// Configurar los routers
router.use('/auth', require('./auth'));

module.exports = router;
