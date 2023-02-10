import express from "express";
import db from "./db.js";

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.info("Server is running on port 3000");
});

const collections = await db.listCollections().toArray();
console.log(collections);
