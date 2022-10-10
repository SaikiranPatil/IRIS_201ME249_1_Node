const Task = require('../model/taskModel')
const catchAsyncError = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/errorHandler");

// create a task
exports.createTask = catchAsyncError(async (req, res, next) => {

    const { title, description, socialPlatform, deadline } = req.body;

    const task = await Task.create({
        title,
        description,
        socialPlatform,
        deadline,
        createdBy: req.user.id,
        "club": req.user.club,
    })

    res.status(201).json({
        sucess: true,
        task
    });
})

// get single task
exports.getSingleTask = catchAsyncError(async (req, res, next) => {
    const task = await Task.findById(req.params.id);

    if (!task) {
        return next(new ErrorHandler(`Task not found with id ${req.params.id}`, 404));
    }

    res.status(200).json({
        sucess: true,
        task
    })
})


// update Task
exports.updateTask = catchAsyncError(async (req, res, next) => {
    const task = await Task.findById(req.params.id);

    if(!task) {
        return next(new ErrorHandler(`Task not found with id ${req.params.id}`,404));
    }

    const newTaskData = {
        title: req.body.title,
        description: req.body.description,
        socialPlatform: req.body.socialPlatform,
        deadline: req.body.deadline
    };

    const updatedTask = await Task.findByIdAndUpdate(req.params.id, newTaskData, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });

    res.status(200).json({
        sucess: true,
        updatedTask
    })
})

exports.deleteTask = catchAsyncError(async (req, res, next) => {
    const task = await Task.findById(req.params.id);

    if (!task) {
        return next(new ErrorHandler(`Task not found with id ${req.params.id}`, 404));
    }

    await Task.findByIdAndDelete(req.params.id);

    res.status(200).json({
        sucess: true,
    })
})

// get all tasks
exports.getAllTasks = catchAsyncError(async (req, res, next) => {
    const tasks = await Task.find({ "club": req.user.club });

    res.status(200).json({
        sucess: true,
        tasks
    })
})

// create subTask
exports.createSubTask = catchAsyncError(async (req, res, next) => {
    const { taskId, subTaskTitle, description, assigneeId, status, deadline, file } = req.body;

    const newSubTask = {
        subTaskTitle,
        description,
        assigneeId,
        status,
        deadline,
        file,
        assignedById: req.user.id
    };

    const task = await Task.findById(taskId);

    if (!task) {
        return next(new ErrorHandler(`Task not found with id ${taskId}`), 400);
    }

    const User = require('../model/userModel');
    const assigneeUser = await User.findById(assigneeId);

    if (assigneeUser.club != req.user.club) {
        return next(new ErrorHandler(`Assignee Must be of the same club, cannot assign Sub-Tasks to member of Club: ${assigneeUser.club}`), 400);
    }

    task.subTasks.push(newSubTask);

    await task.save({ validateBeforeSave: false });

    res.status(200).json({
        sucess: true,
        task
    });
})

// update task
exports.updateSubTask = catchAsyncError(async (req, res, next) => {
    const newTaskData = {
        title: req.body.title,
        description: req.body.description,
        socialPlatform: req.body.socialPlatform,
        deadline: req.body.deadline
    };

    const task = await Task.findByIdAndUpdate(req.params.id, newTaskData, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });

    res.status(200).json({
        sucess: true,
        task
    })
})