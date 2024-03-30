const { Director, Teachers, Students } = require("../models/users.models.js");
const {passControl} = require("../middlewares.js");

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
const passwordControl =
  ("/login",
  [passControl],
  (req, res) => {
    res.status(200).json({
      status: true,
      message: "success",
    });
  });
module.exports = {
  getDirector,
  addDirector,
  sendTeacher,
  sendStudent,
  passwordControl,
};
