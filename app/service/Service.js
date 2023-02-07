import { Schema } from "mongoose";
import userSchema from "../User/user-schema";

const serviceSchema = new Schema({
  name: String,
  description: String,
  serviceType: {
    type: String,
    enum: ["Food", "Transportation", "Housework", "Other"],
  },
  requestedBy: userSchema,

  fulfilledBy: userSchema,
});
