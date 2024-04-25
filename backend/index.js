const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors({ origin: "*" }));

app.get("/", (req, res, next) => {
  res.json("Running");
});

app.get("/data-1", (req, res) => {
  res.status(200).json([1, 2, 3, 4, 5]);
});
app.get("/data-2", (req, res) => {
  res.status(200).json([6, 7, 8, 9, 10]);
});
app.get("/data-3", (req, res) => {
  res.status(200).json([11, 12, 13, 14, 15]);
});
app.get("/data-4", (req, res) => {
  res.status(200).json([16, 17, 18, 19, 20]);
});

app.listen(4000, () => console.log("Server Running!!!"));
