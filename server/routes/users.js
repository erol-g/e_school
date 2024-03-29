var express = require("express");
const {
  getDirector,
  addDirector,
  sendTeacher,
  sendStudent,
  getStudentsByClass,
} = require("../controllers/user.controller");
const { createLesson } = require("../controllers/school.controller");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/getDirector", getDirector);
router.post("/addDirector", addDirector);
router.post("/register-teacher", sendTeacher);
router.post("/register-student", sendStudent);
router.post("/create-lesson", createLesson);
router.get("/students/:className", getStudentsByClass);

module.exports = router;
