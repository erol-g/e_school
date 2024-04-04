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
  className: {
    type: Schema.Types.ObjectId,
    ref: "ClassName", // Reference to class
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
  },
});

const Lesson = model("Lessons", lessonSchema);

module.exports = { Lesson };
