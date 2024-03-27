const mongoose = require("mongoose");
require("dotenv/config");
const { model, Schema } = mongoose;

const databaseUri = `mongodb+srv://talrise:${process.env.DB_PASSWORD}@cluster0.cjmmdbt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose
  .connect(databaseUri)
  .then((res) => console.log("database connected"))
  .catch((err) => console.log(err));

const directorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  password: {
    type: Number,
  },
  address: {
    type: String,
  },
});

const studentsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  password: {
    type: Number,
  },
  address: {
    type: String,
  },
});

const teachersSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  password: {
    type: Number,
  },
  address: {
    type: String,
  },
});
const Director = model("directors", directorSchema);
const Teachers = model("teachers", teachersSchema);
const Students = model("students", studentsSchema);
module.exports = { Director, Teachers, Students };
