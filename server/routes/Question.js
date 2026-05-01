const router = require("express").Router();
const Question = require("../models/Question");


// ✅ POST QUESTION
router.post("/ask", async (req, res) => {
  try {
    const { title, description, userId } = req.body;

    if (!title || !description) {
      return res.status(400).send("Title and description required");
    }

    const newQuestion = new Question({
      title,
      description,
      userId,
      answers: [] // ensure answers array exists
    });

    await newQuestion.save();

    res.status(201).send("Question added successfully");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error adding question");
  }
});


// ✅ GET ALL QUESTIONS (latest first)
router.get("/", async (req, res) => {
  try {
    const questions = await Question.find().sort({ createdAt: -1 });
    res.json(questions);
  } catch (err) {
    res.status(500).send("Error fetching questions");
  }
});


// ✅ ADD ANSWER
router.post("/:id/answer", async (req, res) => {
  try {
    const { text, userId, userName } = req.body;

    if (!text) {
      return res.status(400).send("Answer text required");
    }

    const question = await Question.findById(req.params.id);

    if (!question) {
      return res.status(404).send("Question not found");
    }

    // make sure answers array exists
    if (!question.answers) {
      question.answers = [];
    }

    question.answers.push({
      text,
      userId,
      userName
    });

    await question.save();

    res.status(200).send("Answer added successfully");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error adding answer");
  }
});


module.exports = router;