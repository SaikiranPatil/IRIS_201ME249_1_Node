const Task = require('../model/taskModel')
const catchAsyncError = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/errorHandler");

// create a task
exports.createTask = catchAsyncError(async (req, res, next) => {

    const { title, description, socialPlatform, club, deadline } = req.body;

    const task = await Task.create({
        title, description, socialPlatform, club, deadline
    })

    res.status(201).json({
        sucess: true,
        task
    });
})

// create subTask
exports.createSubTask = catchAsyncError(async (req, res, next) => {

    const { taskId, title, description, assignee, status, deadline } = req.body;

    const subTask = {
        title, description, assignee, status, deadline
    };

    const task = await Task.findById(taskId);

    if (!task) {
        return next(new ErrorHandler(`Task not found with id ${taskId}`), 400);
    }

    let subTaskFound = false;

    task.subTask.map((st) => {
        if (title == st.title) {
            subTaskFound = true;
        }
    })

    if (subTaskFound) {
        return next(new ErrorHandler(`Sub Task is already present`), 400);
    }


    task.subTask.push(subTask);

    await task.save({ validateBeforeSave: false });

    res.status(200).json({
        sucess: true,
        task
    });
})