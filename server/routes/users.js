var express = require("express");
const {
  getDirector,
  addDirector,
  sendTeacher,
  deleteTeacher,
  sendStudent,
  getSchoolInfo,
} = require("../controllers/user.controller");
const { createLesson } = require("../controllers/school.controller");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});
router.get("/getDirector", getDirector);
router.get("/getSchoolInfo", getSchoolInfo);
router.post("/addDirector", addDirector);
router.post("/register-teacher", sendTeacher);
router.delete("/remove-teacher/:id", deleteTeacher);
router.post("/register-student", sendStudent);
router.post("/create-lesson", createLesson);

module.exports = router;
