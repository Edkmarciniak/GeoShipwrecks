import dbConn from "../db.js";
import config from "../config.js";

const collection = dbConn.db(config.db.name).collection("shipfinder");

const controller = {
  index() {
    return (
      collection
        .find()
        // TODO: Customize this limit number as needed
        .toArray()
    );
  },
};

export default controller;
