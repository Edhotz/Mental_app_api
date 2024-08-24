const express = require("express");
const MeditationController = require("../controllers/MeditationController");
const meditationRouter = express.Router();

meditationRouter.get("/dailyQuote", MeditationController.dailyQuote);
meditationRouter.get("/myMood/:mood", MeditationController.adviceByMood);

module.exports = meditationRouter;
