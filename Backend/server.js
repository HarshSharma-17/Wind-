const express = require("express");
const cors = require("cors");

const app = express();

const db = require("./config/db");
const authRoutes = require("./routes/authRoutes");

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Wind Backend is running");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});