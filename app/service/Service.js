import { Schema } from "mongoose";
import userSchema from "../User/user-schema";

const serviceSchema = new Schema({
  name: String,
  description: String,
  serviceType: {
    type: String,
    enum: [
      "Housekeeping",
      "Laundry",
      "Meals",
      "Grooming",
      "Yardwork",
      "Transportation",
      "Shopping",
      "Companionship",
    ],
  },

  const requestedBySchema = new Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    }
  }

  const fulfilledBySchema = new Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    }
  }
});
