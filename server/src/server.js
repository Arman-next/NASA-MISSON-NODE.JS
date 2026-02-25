const http = require("http");

const app = require("./app");

const PORT = process.env.PORT || 8000; // first check if there is any port defind in env if not then use 8000

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
