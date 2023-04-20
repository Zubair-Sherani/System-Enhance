const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const FeedbackSchema = new Schema({
  user_id: {
    type: String
  },
  subject: {
    type: String
  },
  description: {
    type: String
  },
  feedback_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("feedback", FeedbackSchema);