const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const authRoutes = require("./routes/authRoute.js");
const taskRoutes = require('./routes/taskRoute.js');

dotenv.config();

connectDB();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", // React Vite default
    credentials: true,
  }),
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend running...");
});

app.use("/api/auth", authRoutes);

app.use('/api/tasks', taskRoutes);

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
