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
        createdBy:req.user.id,
        "club": req.user.club,
    })

    res.status(201).json({
        sucess: true,
        task
    });
})

// create subTask
exports.createSubTask = catchAsyncError(async (req, res, next) => {
    const { taskId, title, description, assigneeId, status, deadline, file } = req.body;

    const newSubTask = {
        title, 
        description, 
        assigneeId, 
        status, 
        deadline, 
        file , 
        assignedById:req.user.id
    };

    const task = await Task.findById(taskId);

    if (!task) {
        return next(new ErrorHandler(`Task not found with id ${taskId}`), 400);
    }

    const User = require('../model/userModel');
    const assigneeUser = await User.findById(assigneeId);

    if(assigneeUser.club!=req.user.club){
        return next(new ErrorHandler(`Assignee Must be of the same club, cannot assign Sub-Tasks to member of Club: ${assigneeUser.club}`), 400);
    }

    task.subTasks.push(newSubTask);

    await task.save({ validateBeforeSave: false });

    res.status(200).json({
        sucess: true,
        task
    });
})

// get all tasks
exports.getAllTasks = catchAsyncError(async (req, res, next) => {
    const tasks = await Task.find({ "club": req.user.club });

    res.status(200).json({
        sucess: true,
        tasks
    })
})

// update task
exports.updateTask = catchAsyncError(async (req, res, next) => {
    
})