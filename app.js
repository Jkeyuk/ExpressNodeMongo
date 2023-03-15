const express = require("express");
const MongoClient = require("mongodb").MongoClient;

const client = new MongoClient("mongodb://root:example@127.0.0.1:27017/", { monitorCommands: true });
client.connect();
const db = client.db("acronym");

const app = express();
const port = 3000;

app.get("/acronym", async (req, res) => {
  let results = await db.collection("acronym").find({}).limit(50).toArray();
  res.send(results).status(200);
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

app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`);
});
