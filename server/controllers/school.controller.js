const { Lessons, Classes } = require("../models/users.models");

const createLesson =
  ("/create-lesson",
  async (req, res) => {
    await Lessons.create(req.body);
    res.json(req.body);
  });
const sendClasses =
  ("/register-class",
  async (req, res) => {
    try {
      await Classes.create(req.body);
      res.status(201).json(req.body);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  const getAllClasses =
  ("/all-classes",
  async (req, res) => {
    try {
      const result = await Classes.find({});
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

//students:

module.exports = { createLesson, sendClasses, getAllClasses };

