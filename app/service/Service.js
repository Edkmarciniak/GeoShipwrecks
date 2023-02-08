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
})

 // Requested-By
const requestedBy = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
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

// Fulfilled-By
const fulfilledBy = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
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

});
