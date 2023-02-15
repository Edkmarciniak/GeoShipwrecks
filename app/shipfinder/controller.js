import config from "../config.js";
import dbConn from "../db.js";

const collection = dbConn.db(config.db.name).collection("shipfinder");

const controller = {
  index() {
    return (
      collection
        .find()
        .limit(100)
        // TODO: Customize this limit number as needed
        .toArray()
    );
  },
};

export default controller;
