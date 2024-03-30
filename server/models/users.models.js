const mongoose = require("mongoose");
const { model, Schema } = mongoose;
const connectDB = require("../db.connection");

connectDB();

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

  grades: [
    {
      name: {
        type: String,
        required: true,
      },
      result: {
        type: Number,
        required: true,
      },
    },
  ],
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
const lessonsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  teacherName: {
    type: String,
    required: true,
  },
});

const messageSchema = new Schema({
  sender: { type: Schema.Types.ObjectId, ref: "User", required: true },
  recipient: { type: Schema.Types.ObjectId, ref: "User", required: true },
  content: { type: String, required: true },
  senderName: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Director = model("directors", directorSchema);
const Teachers = model("teachers", teachersSchema);
const Students = model("students", studentsSchema);
const Lessons = model("lessons", lessonsSchema);
const Message = model("Message", messageSchema);

module.exports = { Director, Teachers, Students, Lessons, Message };
