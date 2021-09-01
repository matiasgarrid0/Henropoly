const { Router } = require("express");
const { cardProperties } = require("./../db");

let jsonData = require('../../dbData/cardProperties');

const router = Router();

router.get("/", async (req, res, next) => {
  try {

    res.send(jsonData)
  } catch (error) {
    next(error);
  }
});

module.exports = router;