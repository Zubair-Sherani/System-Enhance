const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  username: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  joining_date: {
    type: Date,
    default: Date.now
  },
  first_name: {
    type: String
  },
  last_name: {
    type: String
  },
  phone_number: {
    type: String
  },
  address: {
    type: String
  },
  job_history: {
    type: [String]
  },
  needs: {
    type: [String]
  },
  wants: {
    type: [String]
  },
  behavior: {
    type: String,
    enum: ['Good', 'Bad', 'Neutral']
  }
});

module.exports = mongoose.model("users", UserSchema);