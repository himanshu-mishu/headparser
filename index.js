// index.js
// where your node app starts

require("dotenv").config();
var express = require("express");
var cors = require("cors");

var app = express();

// Enable CORS for FCC testing
app.use(cors({ optionsSuccessStatus: 200 }));

// Serve static files from /public
app.use(express.static("public"));

// Basic homepage route
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// Test API route
app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});

// ✅ Header Parser Endpoint
app.get("/api/whoami", function (req, res) {
  res.json({
    ipaddress: req.ip,
    language: req.headers["accept-language"],
    software: req.headers["user-agent"],
  });
});

// Start the server
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
