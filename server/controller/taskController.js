const Task = require('../model/taskModel')
const catchAsyncError = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/errorHandler");
const sendEmail = require("../utils/sendEmail");

// create a task
exports.createTask = catchAsyncError(async (req, res, next) => {

    const { title, description, social, deadline } = req.body;

    const task = await Task.create({
        title,
        description,
        social,
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

    if (!task) {
        return next(new ErrorHandler(`Task not found with id ${req.params.id}`, 404));
    }

    const newTaskData = {
        title: req.body.title,
        description: req.body.description,
        social: req.body.social,
        deadline: req.body.deadline
    };

    console.log(newTaskData)

    const updatedTask = await Task.findByIdAndUpdate(req.params.id, newTaskData, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });

    res.status(200).json({
        sucess: true,
        task: updatedTask
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
        taskId,
        assignedById: req.user.id
    };

    const task = await Task.findById(taskId);

    if (!task) {
        return next(new ErrorHandler(`Task not found with id ${taskId}`), 400);
    }

    const User = require('../model/userModel');
    const assigneeUser = await User.findById(assigneeId);

    if (!assigneeUser) {
        return next(new ErrorHandler(`Assignee not found with id ${assigneeId}`), 401);
    }

    if (assigneeUser.club != req.user.club) {
        return next(new ErrorHandler(`Assignee Must be of the same club, cannot assign Sub-Tasks to member of Club: ${assigneeUser.club}`), 400);
    }

    assigneeUser.subTasks.push(taskId);

    await assigneeUser.save({ validateBeforeSave: false });


    task.subTasks.push(newSubTask);

    task.noOfsubTasks = task.noOfsubTasks + 1;

    await task.save({ validateBeforeSave: false });

    const message = `Title: ${task.title}/n with deadline ${task.deadline}`;

    try {
        await sendEmail({
            email: assigneeUser.email,
            subject: `You have been assigned a task by ${req.user.name}`,
            message
        })

        res.status(200).json({
            sucess: true,
            task
        });

    } catch (error) {
        console.log(error.message);

        return next(new ErrorHandler(error.message, 500))
    }
})

// get single sub task
exports.getSingleSubTask = catchAsyncError(async (req, res, next) => {
    const task = await Task.findById(req.params.id);
    let requiredSubTask = null;

    task.subTasks.forEach((subTask) => {
        if (subTask.id == req.body.subTaskId) {
            requiredSubTask = subTask;
        }
    })

    if (!requiredSubTask) {
        return next(new ErrorHandler(`Sub Task not found with id ${req.body.subTaskId}`, 404));
    }

    res.status(200).json({
        sucess: true,
        subTask: requiredSubTask
    })
})

// update sub task
exports.updateSubTask = catchAsyncError(async (req, res, next) => {
    const task = await Task.findById(req.params.id);

    if (!task) {
        return next(new ErrorHandler(`Task not found with id ${req.params.id}`), 400);
    }

    const newSubTask = {
        subTaskTitle: req.body.subTaskTitle,
        description: req.body.description,
        deadline: req.body.deadline,
        status: req.body.status
    }

    const allSubTasks = task.subTasks.map(function (subTask) {
        if (req.body.subTaskId === subTask.id) {
            return newSubTask;
        }
        return subTask;
    });

    task.subTasks = allSubTasks;

    await task.save({ validateBeforeSave: false });

    res.status(200).json({
        sucess: true,
        task
    })
})

// delete subTask
exports.deleteSubTask = catchAsyncError(async (req, res, next) => {
    const task = await Task.findById(req.params.id);

    if (!task) {
        return next(new ErrorHandler(`Task not found with id ${req.params.Id}`), 400);
    }

    const subTasks = task.subTasks.filter(subtask => subtask.id !== req.body.subTaskId);

    task.subTasks = subTasks;

    await task.save({ validateBeforeSave: false });

    res.status(200).json({
        sucess: true
    })
})

// update task by assginee
exports.updateTaskByAssignee = catchAsyncError(async (req, res, next) => {
    const task = await Task.findById(req.params.id);

    if (!task) {
        return next(new ErrorHandler(`Task not found with id ${req.body.id}`), 400);
    }

    const allSubTasks = task.subTasks.map(function (subTask) {
        if (req.body.subTaskId === subTask.id) {
            subTask.status = req.body.status;
            subTask.file = req.body.file;
        }
        return subTask;
    });

    task.subTasks = allSubTasks;

    await task.save({ validateBeforeSave: false });

    res.status(200).json({
        sucess: true,
        task
    })
})