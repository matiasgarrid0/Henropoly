const { Router } = require("express");
const router = Router();
//route de crear partida
router.get("/", (req, res, next) => {
  res.json({ hola:'dd'});
});
module.exports = router;
