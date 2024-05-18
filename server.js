const bodyParser = require('body-parser');
const cors = require('cors');
const path = require("path");
const express = require("express");

const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE, PATCH");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "Login.html"));
});

app.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
  });

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "SignUp.html"));
});

app.get("/gudang", (req, res) => {
  res.sendFile(path.join(__dirname, "InfoRow.html"));
});

app.get("/profile", (req, res) => {
  res.sendFile(path.join(__dirname, "Profile.html"));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}...`);
});
