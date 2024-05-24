const bodyParser = require('body-parser');
// const cors = require('cors');
const path = require("path");
const express = require("express");

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Allow all origins
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
      return res.status(200).json({});
  }
  next();
});
app.use(bodyParser.json());


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
  });

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "Login.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "SignUp.html"));
});

app.get("/sewa", (req, res) => {
  res.sendFile(path.join(__dirname, "ListSewa.html"));
});

app.get("/addSewa", (req,res) => {
  res.sendFile(path.join(__dirname, "InputSewa.html"))
})

app.get("/editSewa", (req, res) => {
  res.sendFile(path.join(__dirname, "EditSewa.html"));
});

app.get("/gudang", (req,res) => {
  res.sendFile(path.join(__dirname, "ListGudang.html"))
})

app.get("/addGudang", (req,res) => {
  res.sendFile(path.join(__dirname, "InputGudang.html"))
})

app.get("/profile", (req, res) => {
  res.sendFile(path.join(__dirname, "ListProfile.html"));
});

app.get("/logo", (req, res) => {
  res.sendFile(path.join(__dirname, "logoIndustri.png"))
})

app.get("/background", (req, res) => {
  res.sendFile(path.join(__dirname, "industrial-background.jpg"))
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}...`);
});
