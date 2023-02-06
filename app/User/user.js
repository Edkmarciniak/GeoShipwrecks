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
  password: {
    type: String,
    required: [true, "Password is required"],
    minLength: [3, "Password must be at least 3 characters long"],
    trim: true,
  },
  // TODO: Get more stuff from 'user-schema.js' (and then delete that file)
  // services: [serviceSchema]

  userType: {
    type: String,
    enum: ["Senior", "Provider"],
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
  address: {
    type: String,
    required: [true, "Address is required"],
  },
  services: {
    type: [String],
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
});

seniorSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    const generatedSalt = await bcrypt.genSalt(config.saltRounds);
    this.password = await bcrypt.hash(this.password, generatedSalt);
  }

  next();
});

seniorSchema.statics.login = async function (username, password) {
  const user = await this.findOne({ username });

  let isMatch = false;
  if (user) {
    isMatch = await bcrypt.compare(password, user.password);
  }

  return isMatch
    ? jwt.sign(
        {
          user: {
            id: user._id,
            username: user.username,
          },
        },
        config.jwtSecret,
        { expiresIn: config.jwtExpiresIn }
      )
    : null;
};

export default model("Senior", seniorSchema);
