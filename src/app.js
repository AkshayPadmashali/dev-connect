const express = require("express");
const { adminAuth } = require("./middlewares/auth");
const app = express();

app.use("/admin", adminAuth);

app.get("/admin/dashboard", (req, res) => {
  res.send("Welcome to Admin dashboard");
});

app.get("/admin/console", (req, res) => {
  res.send("Welcome to Admin console");
});

app.get("/user/:userId", (req, res) => {
  console.log(req.params);
  console.log(req.query);
  res.send({ wife: "Panchami" });
});

app.listen(9999, () => {
  console.log("Server is listening at port: 9999");
});
