import { MongoClient } from "mongodb";
import config from "./config.js";

const client = new MongoClient(config.db.conn);
let db;

try {
  await client.connect();
  db = client.db(config.db.name);
} catch (err) {
  console.error(err.message);
} finally {
  await client.close();
}

process.on("exit", () => {
  client.close();
  console.info("MongoDB connection closed");
});

export default db;
