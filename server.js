const path = require("path");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "Login.html"));
});

app.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
  });

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "SignUp.html"));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}...`);
});