const router = require("express").Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");


// ✅ REGISTER
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = new User({ name, email, password });
    await user.save();

    res.send("User registered");
  } catch (err) {
    res.status(500).send(err.message);
  }
});


// ✅ LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(400).send("Invalid credentials");
    }

    const token = jwt.sign(
      { id: user._id },
      "secretkey"
    );

    res.json({ token });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;