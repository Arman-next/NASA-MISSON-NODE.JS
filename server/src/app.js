const express = requrie("express");

const planetsRouter = require("./routes/planets/planet.router");

const app = express();

// middlewares
app.use(express.json());
app.use(planetsRouter);

module.exports = app;
