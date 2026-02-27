const express = require("express");
const cors = require("cors");

const planetsRouter = require("./routes/planets/planet.router");

const app = express();

// middlewares
app.use(
  cors({
    origin: "http://localhost:3000", // only accept cross origin request from this domain
  }),
);
app.use(express.json());
app.use(planetsRouter);

module.exports = app;
