const mongoose = require("mongoose");

const answerSchema = new mongoose.Schema({
  text: String,
  userId: String,
  userName: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const questionSchema = new mongoose.Schema({
  title: String,
  description: String,
  userId: String,
  userName: String,
  answers: [answerSchema]
}, { timestamps: true });

module.exports = mongoose.model("Question", questionSchema);