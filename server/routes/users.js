var express = require("express");
const {
  getDirector,
  addDirector,
  sendTeacher,
  deleteTeacher,
  sendStudent,
  getAllTeachers,
  getPersonelInfoById,
  deleteStudent,
  getSchoolInfo,
  getStudentsByClass,
  updatePassword,
  getStudentGrade,
  sendMessage,
  getMessage,
  getAllStudents,
  passwordControl,
  getClassList,
  schoolInformation,
  addGrade,
  getGrades,
} = require("../controllers/user.controller");

const {
  createLesson,
  sendClasses,
  getAllClasses,
  // deleteClass,
  getClassesByTeacher,
} = require("../controllers/school.controller");
const { passControl } = require("../middlewares");

var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/getDirector", getDirector);
router.get("/getSchoolInfo", getSchoolInfo);
router.delete("/remove-teacher/:id", deleteTeacher);
router.post("/addDirector", addDirector);
router.post("/register-teacher", sendTeacher);
router.post("/register-student", sendStudent);
router.post("/create-lesson", createLesson);
router.post("/add-grade", addGrade);
router.get("/getGrades", getGrades);
router.get("/getPersonelInfo/:id", getPersonelInfoById);
router.delete("/delete-student/:id", deleteStudent);
// router.delete("/delete-class/:id", deleteClass);
router.get("/search", getStudentsByClass);
router.get("/class-list/:userId", getClassList);
router.post("/sendMessage", sendMessage);
router.get("/getMessage/:email", getMessage);
router.get("/getGrade/:id", getStudentGrade);
router.get("/all-students", getAllStudents);
router.post("/register-class", sendClasses);
router.post("/login", [passControl], passwordControl);
router.get("/all-classes", getAllClasses);
router.get("/all-teachers", getAllTeachers);
router.get("/school-information", schoolInformation);

/* Update password */
router.patch("/director/change-password/:id", updatePassword);
router.patch("/teacher/change-password/:id", updatePassword);
router.patch("/student/change-password/:id", updatePassword);

module.exports = router;
