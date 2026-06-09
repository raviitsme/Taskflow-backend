const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const authRoutes = require("./routes/authRoute.js");
const taskRoutes = require('./routes/taskRoute.js');
const userRoutes = require('./routes/userRoute.js');

dotenv.config();

connectDB();

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173", "https://taskflow-beta-ten.vercel.app"],
    credentials: true,
  }),
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend running...");
});

app.use("/api/auth", authRoutes);

app.use('/api/tasks', taskRoutes);

app.use('/api/me', userRoutes);

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
