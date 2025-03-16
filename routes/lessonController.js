const express = require("express");
const router = express.Router();
const {
  createLesson,
  editLessonDetails,
  fetchLessons,
} = require("../Controller/lessonController");
const { jwtProtect } = require("../middleware/jwtProtect");

router.post("/", jwtProtect, createLesson);
router.patch("/", jwtProtect, editLessonDetails);
router.get("/:admin_account_id", jwtProtect, fetchLessons);

module.exports = router;
