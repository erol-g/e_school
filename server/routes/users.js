var express = require("express");
const {
  getDirector,
  addDirector,
  getStudent,
  sendTeacher,
  sendStudent,
  getStudentsByClass,
  updatePassword,
  getStudentGrade,
  sendMessage,
  getMessage,
  getAllStudents,
  passwordControl,
  getAllUsers,
} = require("../controllers/user.controller");

const {
  createLesson,
  sendClasses,
} = require("../controllers/school.controller");
const { passControl, roleControl } = require("../middlewares");

var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/getDirector", getDirector);
router.post("/addDirector", [roleControl], addDirector);
router.post("/register-teacher", [roleControl], sendTeacher);
router.post("/register-student", [roleControl], sendStudent);
router.post("/create-lesson", createLesson);
router.get("/students/:className", getStudentsByClass);
router.post("/sendMessage", sendMessage);
router.get("/getMessage/:id", getMessage);
router.get("/getStudent", getStudent);
router.get("/getGrade/:id", getStudentGrade);
router.get("/all-students", getAllStudents);
router.post("/register-class", sendClasses);
router.post("/login", [passControl], passwordControl);

/* Update password */
router.patch("/director/change-password/:id", updatePassword);
router.patch("/teacher/change-password/:id", updatePassword);
router.patch("/student/change-password/:id", updatePassword);

module.exports = router;
