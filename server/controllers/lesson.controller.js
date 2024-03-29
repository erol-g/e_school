const { Lesson, ClassName } = require("../models/lessons.models.js");
const LessonController = {
  //DELETE LESSON
  deleteLesson: async (req, res) => {
    try {
      const deletedLesson = await Lesson.findByIdAndDelete(req.params.id);
      if (!deletedLesson) {
        return res
          .status(404)
          .json({ error: `Lesson with ID ${deletedLesson} not found` });
      }
      await deletedLesson.remove();
      res.json({ message: "Lesson deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  
};

module.exports = { deleteLesson};
