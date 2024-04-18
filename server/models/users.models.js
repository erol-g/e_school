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
    unique: true,
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
    unique: true,
  },
  tel: {
    type: Number,
  },
  address: {
    type: String,
  },
});

const studentsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: Number,
    },
    address: {
      type: String,
    },
    role: {
      type: String,
    },
    classId: {
      type: Schema.Types.ObjectId,
      ref: "Classes",
    },
  },
  {
    collection: "students",
    timestamps: true,
  }
);

const teachersSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: Number,
    },
    address: {
      type: String,
    },
    role: {
      type: String,
    },
    subject: {
      type: String, // Assuming the subject name is stored as a string
      required: true,
    },
    classIds: [
      {
        type: Schema.Types.ObjectId,
        ref: "Classes",
      },
    ],
  },

  {
    collection: "teachers",
    timestamps: true,
  }
);

const lessonsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    teacherName: {
      type: String,
      required: true,
    },
  },
  {
    collection: "lessons",
    timestamps: true,
  }
);

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
  //Bu gereksizse sil.
  studentList: [
    {
      type: Schema.Types.ObjectId,
      ref: "Students",
    },
  ],
});

const gradeSchema = new Schema({
  studentId: {
    type: Schema.Types.ObjectId,
    ref: "Students",
  },
  gradeName: {
    type: String,
    required: true,
  },
  result: {
    type: Number,
  },
});

const Director = model("Directors", directorSchema);
const Teachers = model("Teachers", teachersSchema);
const Students = model("Students", studentsSchema);
const Lessons = model("Lessons", lessonsSchema);
const SchoolInfo = model("SchoolInfo", schoolInfoSchema);
const Message = model("Message", messageSchema);
const Classes = model("Classes", classesSchema);
const Grades = model("Grades", gradeSchema);

module.exports = {
  Director,
  Teachers,
  Students,
  Lessons,
  SchoolInfo,
  Classes,
  Message,
  Grades,
};
