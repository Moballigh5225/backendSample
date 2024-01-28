const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("hello server is on");
});

app.get("/login", (req, res) => {
  res.send("<h1>login page is here</h1>");
});

app.listen(port, () => {
  console.log(`Sample Server is running on ${port}`);
});
