const express = require("express");
const meditationRouter = require("./adapters/routes/meditationRoutes");
const songsRouter = require("./adapters/routes/songsRoutes");

const app = express();

const port = process.env.PORT || 3000;
app.use(express.json());

app.use("/meditation", meditationRouter);
app.use("/songs", songsRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));
