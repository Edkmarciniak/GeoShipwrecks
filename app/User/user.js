import { Schema, model } from "mongoose";

const seniorSchema = new Schema({
  name: {
    type: String,
    required: [true, "User name is required"],
    minLength: [3, "User name must be at least 3 characters long"],
    trim: true,
    validate: {
      validator(name) {
        // Only allow letters and spaces (one space in between words)
        return /[a-zA-Z]+([\s][a-zA-Z]+)*/.test(name);
      },
      message:
        "User name must only contain letters and only one space in between names",
    },
  },
});

// Start from here tomorrow
export default model("user", seniorSchema);
