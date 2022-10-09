const express = require("express");
const router = express.Router();
const {
    createTask,
    createSubTask,
    updateTask,
    getAllTasks
} = require("../controller/taskController.js");
const {
    isAuthenticatedUser,
    authorizeRoles
} = require("../middleware/authentication.js");

router.route("/task/create").post(isAuthenticatedUser, authorizeRoles("cadmin"), createTask);
router.route("/task/subtask/create").post(isAuthenticatedUser, authorizeRoles("cadmin"), createSubTask);
router.route("/task/subtask/:id").post(isAuthenticatedUser, authorizeRoles("cadmin"), updateTask);
router.route("/tasks").get(isAuthenticatedUser, authorizeRoles("cadmin", "user"), getAllTasks);

module.exports = router; 