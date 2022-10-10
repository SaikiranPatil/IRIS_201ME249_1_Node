const express = require("express");
const router = express.Router();
const {
    createTask,
    getSingleTask,
    updateTask,
    deleteTask,
    getAllTasks,
    createSubTask,
} = require("../controller/taskController.js");
const {
    isAuthenticatedUser,
    authorizeRoles
} = require("../middleware/authentication.js");

router.route("/tasks/create").post(isAuthenticatedUser, authorizeRoles("cadmin"), createTask);
router.route("/task/:id").get(isAuthenticatedUser, authorizeRoles("cadmin"), getSingleTask).put(isAuthenticatedUser, authorizeRoles("cadmin"), updateTask).delete(isAuthenticatedUser, authorizeRoles("cadmin"), deleteTask);
router.route("/tasks/subtasks/create").post(isAuthenticatedUser, authorizeRoles("cadmin"), createSubTask);
router.route("/tasks/subtask/:id").post(isAuthenticatedUser, authorizeRoles("cadmin"), updateTask);
router.route("/tasks/all").get(isAuthenticatedUser, authorizeRoles("cadmin", "user"), getAllTasks);

module.exports = router; 