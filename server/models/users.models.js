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
  role: {
    type: String,
    required: true,
  },
});

const schoolInfoSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  tel: {
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
  className: String,
  role: {
    type: String,
  },
  className: {
    type: String,
    ref: "Classes",
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

}, 
 role: {
    type: String,
    required: true,
  },                                
 }, {
  collection: "lessons",
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

const messageSchema = new Schema({
  sender: { type: Schema.Types.ObjectId, ref: "User", required: true },
  recipient: { type: Schema.Types.ObjectId, ref: "User", required: true },
  content: { type: String, required: true },
  senderName: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const classesSchema = new Schema({
  className: {
    type: String,
    required: true,
  },
  studentList: [
    {
      type: Schema.Types.ObjectId,
      ref: "Students",
    },
  ],
});

const Director = model("Directors", directorSchema);
const Teachers = model("Teachers", teachersSchema);
const Students = model("Students", studentsSchema);
const Lessons = model("Lessons", lessonsSchema);
const SchoolInfo = model("SchoolInfo", schoolInfoSchema);
const Message = model("Message", messageSchema);
const Classes = model("Classes", classesSchema);

module.exports = {
  Director,
  Teachers,
  Students,
  Lessons,
  SchoolInfo,
  Classes,
  Message,
};
