const express = require("express");
const bp = require("body-parser");
const MongoClient = require("mongodb").MongoClient;

const client = new MongoClient("mongodb://root:example@127.0.0.1:27017/", {
  monitorCommands: true,
});
client.connect();
const db = client.db("acronym");

const app = express();
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

const port = 3000;

app.get("/acronym", async (req, res) => {
  let results = await db.collection("acronym").find({}).limit(50).toArray();
  res.send(results).status(200);
});

app.post("/acronym", async (req, res) => {
  let collection = db.collection("acronym");
  let newDocument = req.body;
  let result = await collection.insertOne(newDocument);
  res.send(result).status(204);
});

app.patch("/acronym/:acronymID", async (req, res) => {
  const query = { _id: req.params.acronymID };
  const updates = {
    $set: { acronym: req.body.acronym },
  };
  let collection = db.collection("acronym");
  let result = await collection.updateOne(query, updates);
  res.send(result).status(200);
});

app.delete("/acronym/:acronymID", async (req, res) => {
  const query = { _id: req.params.acronymID };
  const collection = db.collection("acronym");
  let result = await collection.deleteOne(query);
  res.send(result).status(200);
});

app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`);
});
