const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express(); // ✅ MUST COME FIRST

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require("./routes/auth");
const questionRoutes = require("./routes/question");
const postRoutes = require("./routes/Posts"); // ✅ add this

app.use("/api/auth", authRoutes);
app.use("/api/questions", questionRoutes);
app.use("/api/posts", postRoutes); // ✅ AFTER app is created

// Test route
app.get("/", (req, res) => {
  res.send("Server is running...");
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});