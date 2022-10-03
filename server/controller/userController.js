const catchAsyncError = require("../middleware/catchAsyncError");
const User = require("../model/userModel");

// register an user 
exports.registerUser = catchAsyncError(async (req, res, next) => {

    const { name, email, password, club } = req.body;

    const user = await User.create({
        name, email, password, club
    })

    res.status(300).json({
        sucess: true,
        user
    });
})