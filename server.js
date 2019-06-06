const express = require("express");
const server = express();

server.use(express.json());
server.use(logger);

server.get("/", (req, res) => {
  res.send(`<p> TESTING AM I LIVE </p>`);
});

// Define Routes
server.use("/api/cohorts", require("./routes/cohorts-router"));
server.use("/api/students", require("./routes/students-router"));

// Logger
function logger(req, res, next) {
  console.log(` [${new Date().toISOString()}] ${req.method} to ${req.url}`);
  next();
}

module.exports = server;
