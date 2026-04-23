const router = require("express").Router();
const Question = require("../models/Question");

// POST QUESTION
router.post("/ask", async (req, res) => {
  try {
    const { title, description, userId, userName } = req.body;

    const question = new Question({
      title,
      description,
      userId,
      userName,
      answers: []
    });

    await question.save();
    res.send("Question posted");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// GET QUESTIONS
router.get("/", async (req, res) => {
  try {
    const questions = await Question.find().sort({ createdAt: -1 });
    res.json(questions);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// ADD ANSWER
router.post("/:id/answer", async (req, res) => {
  try {
    const { text, userId, userName } = req.body;

    const question = await Question.findById(req.params.id);

    question.answers.push({
      text,
      userId,
      userName
    });

    await question.save();

    res.send("Answer added");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;