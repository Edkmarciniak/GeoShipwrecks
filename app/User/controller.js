import mongoose from "mongoose";
import config from "../config.js";
import User from "./User.js";

mongoose.set("strictQuery", true);
mongoose
  .connect(config.getDbConn("users"))
  .then(() => {
    console.info("Connected to the database");
  })
  .catch((err) => {
    console.error("Error connecting to the database", err);
  });

const controller = {
  getUsers() {
    return User.find();
  },
};

const user = await controller.getUsers();
console.log(user);
export default controller;
