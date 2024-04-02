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

module.exports = { createLesson, sendClasses };
