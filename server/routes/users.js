var express = require("express");
const {
  getDirector,
  addDirector,
  sendTeacher,
  sendStudent,
} = require("../controllers/user.controller");
const {
  createLesson,
  sendClasses,
} = require("../controllers/school.controller");
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
router.post("/register-class", sendClasses);

module.exports = router;
