const { Lesson, ClassName } = require("../models/school.models.js");
 
 //DELETE LESSON
 const deleteLesson = ("/lesson/:id",async (req,res)=> {
    const lessonId = req.params.id;
    const deletedLesson = await Lesson.findByIdAndDelete(lessonId);
    if(!deletedLesson) {
        return res.status(404).json({ error: `Lesson with ID ${lessonId} not found` });
    } else {
        res.status(200).json({ message: "Lesson deleted successfully", deletedLesson });
    }
    
  })
  //GET STUDENTS BY CLASS

  const getStudentsByClass =  ("/getStudents/:className", async (req, res) => {
    const className = req.params.className;
    const foundClass = await ClassName.find((title) => title.name === name)
    if(foundClass) {
        res.status(200).json(foundClass)
    } else {
        res.status(404).send(`There is no lesson with the name ${className}`)
    }
  })

  module.exports = {deleteLesson, getStudentsByClass}