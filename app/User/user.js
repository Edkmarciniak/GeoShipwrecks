import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Schema, model } from "mongoose";
import config from "../config.js";

const seniorSchema = new Schema({
  username: {
    type: String,
    required: [true, "User name is required"],
    minLength: [3, "User name must be at least 3 characters long"],
    trim: true,
    validate: {
      validator(username) {
        // Only allow letters and spaces (one space in between words)
        return /[a-zA-Z]+([\s][a-zA-Z]+)*/.test(username);
      },
    },
  },
});

// Start from here tomorrow
export default model("Senior", seniorSchema);
