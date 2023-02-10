import dbConn from "../db.js";

const collection = dbConn.db("shipwrecks").collection("shipfinder");

const controller = {
  index() {
    return collection.find().toArray();
  },
};

export default controller;
