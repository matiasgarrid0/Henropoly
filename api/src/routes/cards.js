const { Router } = require("express");
const { CardProperty,CommunalArch,FortuneCard } = require("./../db");


const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const responseProperty = await CardProperty.findAll()
    const responseComunalArch = await CommunalArch.findAll()
    const responseFortuneCard= await FortuneCard.findAll()
    res.send({table:responseProperty,fortune:responseFortuneCard,comunal:responseComunalArch})
  } catch (error) {
    next(error);
  }
});

module.exports = router;