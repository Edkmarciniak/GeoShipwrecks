import { Schema } from "mongoose";

export default new Schema({
  userType: {
    type: String,
    enum: ["Senior", "Volunteer"],
    default: "Senior",
  },
  name: {
    type: String,
    required: [true, "User name is required"],
    minLength: [3, "User name must be at least 3 characters long"],
    trim: true,
  },
  email: {
    type: Number,
    required: [true, "Email address is required"],
  },
  password: {
    type: Number,
    required: [true, "Password is required"],
  },
  phone: {
    type: Number,
    required: [true, "Phone number is required"],
  },
});
