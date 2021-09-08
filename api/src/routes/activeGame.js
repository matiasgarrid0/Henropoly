const { Router } = require("express");
const {Game, User} = require("./../db");


const router = Router();
router.post("/", async (req, res, next) => {
    let {user} = req.body;

   try { let gameOne= await Game.create({
        state: active
    }) 
    } catch (error) {
      next(error);
    }
   res.send('game')
  });


router.get("/", async (req, res, next) => {
  try {
   let game = game.findAll()
    res.send(game)
  } catch (error) {
    next(error);
  }
});


module.exports = router;