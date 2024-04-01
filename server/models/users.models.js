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
}, {
  collection: "students",
  timestamps: true,
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
}, {
  collection: "teachers",
  timestamps: true,
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
}, {
  collection: "lessons",
  timestamps: true,
});

const Director = model("directors", directorSchema);
const Teachers = model("teachers", teachersSchema);
const Students = model("students", studentsSchema);
const Lessons = model("lessons", lessonsSchema);

module.exports = { Director, Teachers, Students, Lessons };
