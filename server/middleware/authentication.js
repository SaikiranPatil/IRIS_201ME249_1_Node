const catchAsyncError = require("./catchAsyncError");
const ErrorHandler = require("../utils/errorHandler");
const jsonwebtoken = require("jsonwebtoken");
const User = require("../model/userModel");

exports.isAuthenticatedUser = catchAsyncError(async (req, res, next) => {
    const token = req.cookies.token;
    
    if(!token){
        return next(new ErrorHandler("Please Login to access the resource",401));
    }

    const decodedData = jsonwebtoken.verify(token,process.env.JWT_SECRET);

    req.user = await User.findById(decodedData.id)

    next();
})