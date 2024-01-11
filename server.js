const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("hello server is on");
});

app.listen(port, () => {
  console.log(`Sample Server is running on ${port}`);
});
