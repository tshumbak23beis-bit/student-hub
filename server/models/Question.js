const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    userId: String,
    answers: [
      {
        text: String,
        userId: String,
        userName: String
      }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Question", questionSchema);