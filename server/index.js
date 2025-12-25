require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use("/api", routes);

app.listen(PORT, async () => {
  try {
    const mongoUri =
      process.env.MONGO_URI || "mongodb://localhost:27017/beauty_wellness";
    await mongoose.connect(mongoUri);
    console.log("DB connected");
    console.log(`Server running on http://localhost:${PORT}`);
  } catch (err) {
    console.log("Database connectivity error");
  }
});
