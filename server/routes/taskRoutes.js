const express = require("express");
const router = express.Router();
const {
    createTask,
    getSingleTask,
    updateTask,
    deleteTask,
    getAllTasks,
    createSubTask,
    getSingleSubTask,
    updateSubTask,
    deleteSubTask,
} = require("../controller/taskController.js");
const {
    isAuthenticatedUser,
    authorizeRoles,
    isOfSameClub
} = require("../middleware/authentication.js");

router.route("/tasks/create").post(isAuthenticatedUser, authorizeRoles("cadmin"), createTask);
router.route("/task/:id").get(isAuthenticatedUser,isOfSameClub, authorizeRoles("cadmin"), getSingleTask).put(isAuthenticatedUser,isOfSameClub, authorizeRoles("cadmin"), updateTask).delete(isAuthenticatedUser, isOfSameClub,authorizeRoles("cadmin"), deleteTask);
router.route("/tasks/subtasks/create").post(isAuthenticatedUser, authorizeRoles("cadmin"), createSubTask);
router.route("/tasks/subtask/:id").get(isAuthenticatedUser,isOfSameClub, authorizeRoles("cadmin"), getSingleSubTask).put(isAuthenticatedUser, isOfSameClub,authorizeRoles("cadmin"), updateSubTask).delete(isAuthenticatedUser, isOfSameClub, authorizeRoles("cadmin"),deleteSubTask);
router.route("/tasks/all").get(isAuthenticatedUser, authorizeRoles("cadmin", "user"), getAllTasks);

module.exports = router; 