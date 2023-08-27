const express = require("express");
const app = express();
const cors = require("cors");

// for Cross connection
app.use(cors());

// for Parsing
app.use(express.json());

// for healthy route check
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "UP",
    message: "everything is ok",
  });
});

module.exports = app;
