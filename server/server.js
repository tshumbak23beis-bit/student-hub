const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// ✅ MIDDLEWARE (PUT CORS HERE)
app.use(cors({
  origin: "*"
}));

app.use(express.json());

// Routes
const authRoutes = require("./routes/auth");
const questionRoutes = require("./routes/question");

app.use("/api/auth", authRoutes);
app.use("/api/questions", questionRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Server is running...");
});

// MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});