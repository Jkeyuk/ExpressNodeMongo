const express = require("express");
const app = express();
const port = 3000;

app.get("/acronym", (req, res) => {
  res.send("Hello World!");
});

app.post("/acronym", (req, res) => {
  res.send("Hello World!");
});

app.patch("/acronym/:acronymID", (req, res) => {
  res.send("Hello World!");
});

app.delete("/acronym/:acronymID", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
