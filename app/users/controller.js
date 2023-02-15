import dbConn from "../db.js";

const collection = dbConn.db("shipwrecks").collection("users");

const controller = {
  create(newUser) {
    return collection.insertOne(newUser);
  },
  show(username, password) {
    return collection.findOne({ username, password });
  },
};

export default controller;
