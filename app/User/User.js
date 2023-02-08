import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Schema, model } from "mongoose";
import config from "../config.js";

const userSchema = new Schema({
  User: {
    type: String,
    required: [true, "User name is required"],
    minLength: [3, "User name must be at least 3 characters long"],
    trim: true,
    validate: {
      validator(user) {
        // Only allow letters and spaces (one space in between words)
        return /[a-zA-Z]+([\s][a-zA-Z]+)*/.test(user);
      },
    },
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minLength: [3, "Password must be at least 3 characters long"],
    trim: true,
  },
});

  // TODO: Get more stuff from 'user-schema.js' (and then delete that file)
  // services: [serviceSchema]

  import serviceSchema from "mongoose";

  export default new Schema({
    user: {
    type: String,
    enum: ["User", "Provider"],
    default: "User",
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
    // If 'userType' is 'Senior', then this is a list of services requested
    // If 'userType' is 'Provider', then this is a list of services provided
    type: [serviceSchema],
  },
});


userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    const generatedSalt = await bcrypt.genSalt(config.saltRounds);
    this.password = await bcrypt.hash(this.password, generatedSalt);
  }

  next();
});
// * If there is a user
userSchema.statics.login = async function (username, password) {
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

export default model("User", userSchema);
