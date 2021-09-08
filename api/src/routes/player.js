const { Router } = require("express");
const {Player} = require("./../db");
let infoPlayer = require("../../InfoGameStarted")


const router = Router();
router.put("/", async (req, res, next) => {
    let { properties,henrycoin, position} = req.body;

   try {
       player = {
         properties,
         henrycoin,
         position
       }
       res.send(player)
    } catch (error) {
      next(error);
    }
  
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