const catchAsyncError = require("./catchAsyncError");
const ErrorHandler = require("../utils/errorHandler");
const jsonwebtoken = require("jsonwebtoken");
const User = require("../model/userModel");
const Task = require("../model/taskModel");

exports.isAuthenticatedUser = catchAsyncError(async (req, res, next) => {
    if (!req.cookies) {
        return next(new ErrorHandler("Please Login to access the resource", 401));
    }

    const token = req.cookies.token;
    
    const decodedData = jsonwebtoken.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decodedData.id)

    next();
})

exports.authorizeRoles = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            next(new ErrorHandler(`Role:${req.user.role} is not authorized to acess this resource`, 403));
        }
        next();
    }
}

exports.isOfSameClub = catchAsyncError(async (req, res, next) => {
    const task = await Task.findById(req.params.id);

    if(!task){
        return next(new ErrorHandler(`Task not found with id ${req.body.id}`), 400);
    }

    console.log(req.params.id);
    const user = await User.findById(task.createdBy);

    if(user.club!=req.user.club){
        return next(new ErrorHandler("Cannot access the resource of Other Club", 401));
    }

    next();
})