require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 8080;

const corsOptions = {
  origin: ["https://beauty-wellness-rho.vercel.app", "http://localhost:5173"],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};


app.use(cors(corsOptions));

app.use(express.json());

app.use("/uploads", express.static("uploads"));

app.get("/connected", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "Backend connected successfully ✅",
  });
});

app.use("/api", routes);

app.listen(PORT, async () => {
  try {
    const mongoUri =
      process.env.MONGO_URI || "mongodb://localhost:27017/beauty_wellness";
    await mongoose.connect(mongoUri);
    console.log("DB connected");
    console.log(`Server running on port ${PORT}`);
  } catch (err) {
    console.error("Database connectivity error", err);
  }
});
