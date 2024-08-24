const express = require("express");
const songsRouter = express.Router();
const SongController = require("../controllers/SongController");

songsRouter.get("/all", SongController.all);

module.exports = songsRouter;
