const mongoose = require("mongoose");
require("dotenv/config");

const databaseUri = `mongodb+srv://talrise:${process.env.DB_PASSWORD}@cluster0.cjmmdbt.mongodb.net/School?retryWrites=true&w=majority&appName=Cluster0`;

const connectDB = async () => {
  try {
    await mongoose.connect(databaseUri);
    console.log("Database connected");
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
};

module.exports = connectDB;
