const {
  Director,
  Teachers,
  Students,
  Message,
} = require("../models/users.models.js");

const getDirector =
  ("/getDirector",
  async (req, res) => {
    const result = await Director.find({});

    res.json(result);
  });

//Student
const getStudent =
  ("/getStudent",
  async (req, res) => {
    const result = await Students.find({});

    res.json(result);
  });
const getStudentGrade =
  ("/getGrade/:id",
  async (req, res) => {
    const result = await Students.findById(req.params.id);
    const grades = result.grades;
    res.json(grades);
  });

const addDirector =
  ("/addDirector",
  async (req, res) => {
    const data = await Director.create(req.body);

    res.json(data);
  });

const sendTeacher =
  ("/register-teacher",
  async (req, res) => {
    const data = await Teachers.create(req.body);

    res.json(data);
  });

const sendStudent =
  ("/register-student",
  async (req, res) => {
    const data = await Students.create(req.body);

    res.json(data);
  });

const updatePassword = async (req, res) => {
  let Model;
  if (req.path.includes("director")) Model = Director;
  if (req.path.includes("teacher")) Model = Teachers;
  if (req.path.includes("student")) Model = Students;

  await Model.updateOne({ _id: req.params?.id }, req.body);
  const updatedData = await Model.findOne({ _id: req.params?.id });

  res.json(updatedData);
};

/* messages */

const sendMessage = async (req, res) => {
  try {
    const { senderId, recipientId, content, senderName } = req.body;
    const message = new Message({
      sender: senderId,
      senderName: senderName,
      recipient: recipientId,
      content,
    });
    await message.save();
    res
      .status(201)
      .json({ message: "Message sent successfully", data: message });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error sending message", error: error.message });
  }
};

const getMessage = async (req, res) => {
  try {
    const recipientId = req.params.id;
    const messages = await Message.find({ recipient: recipientId });
    res.status(200).json({ messages: messages });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving messages", error: error.message });
  }
};
/* messages */

const getAllStudents =
  ("/all-students",
  async (req, res) => {
    try {
      const result = await Students.find({});
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

const passwordControl = (req, res) => {
  res.status(200).json({
    status: true,
    message: "success",
    role: req.role,
    id: req.id,
    name: req.name,
  });
};

module.exports = {
  getDirector,
  addDirector,
  sendTeacher,
  sendStudent,
  updatePassword,
  getStudent,
  getStudentGrade,
  sendMessage,
  getMessage,
  getAllStudents,
  passwordControl,
};
