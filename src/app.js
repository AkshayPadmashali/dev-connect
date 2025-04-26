const express = require("express");

const app = express();

app.use("/test", (req, res) => {
  res.send("Test, cool");
});

app.use("/panchami", (req, res) => {
  res.send("Panchami loves you");
});

app.use("/", (req, res) => {
  res.send("Root, wow");
});

app.listen(9999, () => {
  console.log("Welcome");
});
