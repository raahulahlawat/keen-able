const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 3333;

// app.use(express.static(path.join(__dirname, "views")));
app.use(express.static('./public'));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/index.html"));
});

app.get("/program", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/program.html"));
});

app.get("/overview_program", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/overview_program.html"));
});

app.get("/aboutUs", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/about.html"));
});

app.get("/contactUs", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/contact.html"));
});

app.get("/applyNow", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/apply.html"));
});

app.listen(port, () => {
  console.log(`Keen&Able Intern app listening on port ${port}`);
});

