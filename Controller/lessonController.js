const expressAsyncHandler = require("express-async-handler");
const Sequelize = require("sequelize");
const db = require("../models");

// DESCRIPTION: admin create a lesson
// METHOD: POST
// ENDPOINT: /api/lesson
const createLesson = expressAsyncHandler(async (req, res) => {
  try {
    const { admin_account_id, title, description } = req.body;

    const newLesson = await db.lessons.create({
      created_by: admin_account_id,
      title,
      description,
    });

    const lesson = newLesson.get({ plain: true });

    return res.status(200).json({
      message: "Succesfully Created New Lesson",
      result: lesson,
    });
  } catch (error) {
    console.log(">>>>  /api/lesson | POST | ERROR:", error);
    return res
      .status(500)
      .json({ message: "Something Went Wrong Creating Lesson" });
  }
});

// DESCRIPTION: fetch lesson base on admin account id
// METHOD: PATCH
// ENDPOINT: /api/lesson
const editLessonDetails = expressAsyncHandler(async (req, res) => {
  try {
    const { title, description, lesson_id } = req.body;

    await db.lessons.update(
      {
        title,
        description,
      },
      { where: { id: lesson_id } }
    );

    const updatedLesson = await db.lessons.findOne({
      raw: true,
      where: {
        id: lesson_id,
      },
    });

    return res.status(200).json({
      message: "succesfully update lesson details",
      result: updatedLesson,
    });
  } catch (error) {
    console.log(">>>>  /api/lesson/:admin_account_id | GET | ERROR:", error);
    return res
      .status(500)
      .json({ message: "Something Went Wrong Fetching lessons" });
  }
});

// DESCRIPTION: fetch lesson base on admin account id
// METHOD: GET
// ENDPOINT: /api/lesson/:admin_account_id
const fetchLessons = expressAsyncHandler(async (req, res) => {
  try {
    const { admin_account_id } = req.params;

    const listOfLessons = await db.lessons.findAll({
      raw: true,
      where: {
        created_by: admin_account_id,
      },
    });

    return res
      .status(200)
      .json({ message: "Succesfully fetched lessons", result: listOfLessons });
  } catch (error) {
    console.log(">>>>  /api/lesson/:admin_account_id | GET | ERROR:", error);
    return res
      .status(500)
      .json({ message: "Something Went Wrong Fetching lessons" });
  }
});

module.exports = {
  createLesson,
  editLessonDetails,
  fetchLessons,
};
