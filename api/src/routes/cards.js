const { Router } = require("express");
const { cardProperties } = require("./../db");

const router = Router();


router.post("/cards", async (req, res, next) => {
    try {
        const cards = cardProperties.findAll()
    } catch (error) {
      next(error);
    }
  });