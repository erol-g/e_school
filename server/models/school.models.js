const mongoose = require("mongoose");
require("dotenv/config");
const { model, Schema } = mongoose;

const databaseUri = `mongodb+srv://talrise:${process.env.DB_PASSWORD}@cluster0.cjmmdbt.mongodb.net/School?retryWrites=true&w=majority&appName=Cluster0`;

mongoose
  .connect(databaseUri)
  .then((res) => console.log("database connected"))
  .catch((err) => console.log(err));

const lessonSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  teacher: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});

const classNameSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  lessons: {
    type: Schema.Types.ObjectId,
    ref: 'Lesson',
  },
  learners: {
    type: Number,
  },
});

const Lesson = model("lessons", lessonSchema);
const ClassName = model("lessons", classNameSchema);
module.exports = { Lesson, Class };
