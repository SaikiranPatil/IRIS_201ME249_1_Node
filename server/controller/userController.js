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