var express = require("express");
const {
  getDirector,
  addDirector,
  sendTeacher,
  sendStudent,
  updatePassword,
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

/* Update password */
// Director
router.patch("/change-password/director/:userId", updatePassword);
// Teacher
router.patch("/change-password/teacher/:userId", updatePassword);
// Student
router.patch("/change-password/student/:userId", updatePassword);

module.exports = router;
