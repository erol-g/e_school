const {
  Director,
  Teachers,
  Students,
  SchoolInfo,
  Message,
  Lessons,
  Classes,
  Grades,
} = require("../models/users.models.js");

const getDirector =
  ("/getDirector",
  async (req, res) => {
    const result = await Director.find({});
    res.json(result);
  });

const getSchoolInfo =
  ("/getSchoolInfo",
  async (req, res) => {
    const result = await SchoolInfo.find({});

    res.json(result);
  });

//Student

const getStudentGrade =
  ("/getGrade/:id",
  async (req, res) => {
    try {
      const result = await Grades.find({ studentId: req.params.id }).populate(
        "studentId"
      );
      res.json(result);
    } catch (error) {
      res
        .status(500)
        .json({ error: "An error occurred while fetching student grades" });
    }
  });

const getGrades =
  ("/getGrades",
  async (req, res) => {
    try {
      const result = await Grades.find({});
      res.json(result);
    } catch (error) {
      res
        .status(500)
        .json({ error: "An error occurred while fetching grades" });
    }
  });

const addGrade =
  ("/add-grade",
  async (req, res) => {
    try {
      const data = await Grades.create(req.body);
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: "An error occurred while posting grades" });
    }
  });
// const addGrade =
//   ("/add-grade",
//   async (req, res) => {
//     try {
//       const data = await Grades.insertMany(req.body);
//       res.json(data);
//     } catch (error) {
//       res.status(500).json({ error: "An error occurred while posting grades" });
//     }
//   });

const deleteTeacher =
  ("/remove-teacher",
  async (req, res) => {
    try {
      const deletedTeacher = await Teachers.findByIdAndDelete(req.params.id);
      if (!deletedTeacher) {
        return res
          .status(404)
          .json({ error: `Teacher with ID ${deletedTeacher} not found` });
      }
      await deletedTeacher.remove();
      res.json({ message: "Teacher deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

const addDirector =
  ("/addDirector",
  async (req, res) => {
    const data = await Director.create(req.body);

    res.json(data);
  });

  const sendTeacher = async (req, res) => {
    try {
      req.body.role = "teacher";
      const data = await Teachers.create(req.body);
      res.json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

const sendStudent =
  ("/register-student",
  async (req, res) => {
    req.body.role = "student";
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
    const { senderEmail, senderId, recipientEmail, content } = req.body;
    const message = new Message({
      senderEmail,
      recipientEmail,
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
    const recipientEmail = req.params.email;
    const messages = await Message.find({ recipientEmail: recipientEmail });
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
      const result = await Students.find({}).populate("classId");
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

const getAllTeachers =
  ("/all-teachers",
  async (req, res) => {
    try {
      const result = await Teachers.find({}).populate("classIds");
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

const passwordControl = (req, res) => {
  const responseObject = {
    status: true,
    message: "success",
    role: req.role,
    id: req.id,
    name: req.name,
    email: req.email
  };

  // If the user is a teacher, include the subject in the response
  if (req.role === "teacher") {
    responseObject.subject = req.subject;
  }

  res.status(200).json(responseObject);
};

const deleteStudent =
  ("/delete-student/:id",
  async (req, res) => {
    try {
      const { id } = req.params;
      const result = await Students.findByIdAndDelete(id);

      if (!result) {
        return res.status(404).json({ message: "Student not found" });
      }
      return res.status(200).send({ message: "Student deleted succesfully" });
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ message: error.message });
    }
  });

const getClassList = async (req, res) => {
  try {
    const userId = req.params?.userId;
    const personalInfo = await Teachers.find({ _id: userId }).populate(
      "classIds"
    );
    const info = personalInfo[0].classIds;

    res.status(200).json(info);
  } catch (error) {
    res.status(404).json({
      message: "Error retrieving personal messages",
      error: error.message,
    });
  }
};
const getStudentsByClass = async (req, res) => {
  try {
    const classId = req.query.classId;
    const students = await Students.find({ classId: classId });
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPersonelInfoById = async (req, res) => {
  console.log("deneme");
  const userId = req.params.id;
  const role = req.params.role;
  let Model;
  if (role == "director") Model = Director;
  if (role == "teacher") Model = Teachers;
  if (role == "student") Model = Students;
  console.log(req.params)
  try {
    const data = await Model.find({ _id: userId });
    res.status(200).json({ data: data });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving messages", error: error.message });
  }
};

const schoolInformation =
  ("/school-information",
  async (req, res) => {
    try {
      const students = await Students.countDocuments();
      const teachers = await Teachers.countDocuments();
      const directors = await Director.countDocuments();
      const schoolInfo = await SchoolInfo.find({});
      const lessons = await Lessons.countDocuments();
      const classes = await Classes.countDocuments();
      res.json({
        students,
        directors,
        teachers,
        schoolInfo,
        lessons,
        classes,
      });
    } catch (error) {
      res.status(404).json({
        message: "Error retrieving general school info",
        error: error.message,
      });
    }
  });

module.exports = {
  getDirector,
  addDirector,
  sendTeacher,
  sendStudent,
  updatePassword,
  getStudentGrade,
  sendMessage,
  getMessage,
  getAllStudents,
  passwordControl,
  getSchoolInfo,
  deleteTeacher,
  deleteStudent,
  getAllTeachers,
  getClassList,
  getPersonelInfoById,
  getStudentsByClass,
  schoolInformation,
  addGrade,
  getGrades,
};
