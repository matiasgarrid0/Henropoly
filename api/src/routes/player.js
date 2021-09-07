const { Router } = require("express");
const {Player} = require("./../db");
const infoPlayer = require("../../InfoGameStarted")


const router = Router();
router.put("/", async (req, res, next) => {
    let {description, properties, money, initialPosition} = req.body;

   try { let playerOne= await Player.findOrCreate({
        description,
        properties,
        money, 
        initialPosition
    }) 
    } catch (error) {
      next(error);
    }
   let player= await Player.findAll()
   console.log(player)
   res.send(player)
  });


router.get("/", async (req, res, next) => {
  try {
    console.log(infoPlayer)
    res.send(infoPlayer)
  } catch (error) {
    next(error);
  }
});


module.exports = router;