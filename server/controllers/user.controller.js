const { Director, Teachers, Students } = require("../models/users.models.js");

const getDirector =
  ("/getDirector",
  async (req, res) => {
    const result = await Director.find({});

    res.json(result);
  });

const addDirector =
  ("/addDirector",
  async (req, res) => {
    await Director.create(req.body);

    res.json(req.body);
  });

const sendTeacher =
  ("/register-teacher",
  async (req, res) => {
    await Teachers.create(req.body);

    res.json(req.body);
  });

const sendStudent =
  ("/register-student",
  async (req, res) => {
    await Students.create(req.body);

    res.json(req.body);
  });

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

module.exports = {
  getDirector,
  addDirector,
  sendTeacher,
  sendStudent,
  getAllStudents,
};
