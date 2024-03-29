const { Lessons } = require("../models/users.models");

const createLesson =
  ("/create-lesson",
  async (req, res) => {
    await Lessons.create(req.body);
    res.json(req.body);
  });

module.exports = { createLesson };
