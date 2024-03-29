const express = require("express");
const router = express.Router();
const { deleteLesson } = require("../controllers/lesson.controller.js");

router.delete("lessons/:id", deleteLesson);

module.exports = router;
