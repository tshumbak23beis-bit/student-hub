const router = require("express").Router();
const Post = require("../models/Posts");

// CREATE POST
router.post("/create", async (req, res) => {
  try {
    const { title, content, type, subject, userId } = req.body;

    const newPost = new Post({
      title,
      content,
      type,
      subject,
      userId
    });

    await newPost.save();
    res.send("Post created successfully");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// GET ALL POSTS
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;