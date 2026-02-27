const http = require("http");

const app = require("./app");

const { loadPlanetsData } = require("./models/planet.model");

const PORT = process.env.PORT || 8000; // first check if there is any port defind in env if not then use 8000

const server = http.createServer(app);

// we need to load the data(habitalbe planet data) from file stream(which is async operation)
// that's why we need to await the promise untill the data loaded
async function startServer() {
  await loadPlanetsData();

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}

startServer();
