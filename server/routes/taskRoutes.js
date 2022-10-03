const express = require("express");
const router = express.Router();
const { createTask,createSubTask } = require("../controller/taskController.js");

router.route("/task/create").post(createTask);
router.route("/task/subtask/create").post(createSubTask);

module.exports = router; 