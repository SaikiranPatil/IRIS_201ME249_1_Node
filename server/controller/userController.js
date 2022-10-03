const catchAsyncError = require("../middleware/catchAsyncError");
const User = require("../model/userModel");
const sendToken = require("../utils/JWTToken");

// register an user 
exports.registerUser = catchAsyncError(async (req, res, next) => {

    const { name, email, password, club } = req.body;

    const user = await User.create({
        name, email, password, club
    })

    sendToken(user, 201, res);
})

// login user 
exports.loginUser = catchAsyncError(async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return next(new ErrorHandler("Please enter Email and password", 400));
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
        return next(new ErrorHandler("Invalid Username or password", 401));
    }

    const isUserPasswordMatched = await user.comparePassword(password);
    // const isUserPasswordMatched = 1;

    if (!isUserPasswordMatched) {
        return next(new ErrorHandler("Invalid Username or password", 401));
    }

    sendToken(user, 200, res);

})


// logout user  
exports.logoutUser = catchAsyncError(async (req, res, next) => {

    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true
    });

    res.status(200).json({
        sucess: true,
        message: "logged Out"
    })
})