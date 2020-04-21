const express = require("express");
const server = express();
const fs = require("fs");
const cors = require("cors");

server.use(cors());

server.use(express.json());

// Log all requests to the server in log.txt
server.use(function textLogger(req, res, next) {
  const data = `Received ${req.method} request for ${req.url} at ${new Date(
    Date.now()
  )}`;
  fs.appendFile("./log.txt", JSON.stringify(data) + `\n`, (err) => {
    if (err) console.log(err);
    next();
  });
});

module.exports = server;
