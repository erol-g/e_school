const { Lessons, Classes } = require("../models/users.models");

const createLesson =
  ("/create-lesson",
  async (req, res) => {
    await Lessons.create(req.body);
    res.json(req.body);
  });

const deleteClass =
  ("/delete-class/:id",
  async (req, res) => {
    try {
      const { id } = req.params;
      const result = await Lessons.findByIdAndDelete(id);

      if (!result) {
        return res.status(404).json({ message: "Class not found" });
      }
      return res.status(200).send({ message: "Class deleted succesfully" });
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ message: error.message });
    }
  });

const sendClasses =
  ("/register-class",
  async (req, res) => {
    try {
      const data = await Classes.create(req.body);
      res.status(201).json(data);
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

module.exports = { createLesson, sendClasses, getAllClasses, deleteClass };
