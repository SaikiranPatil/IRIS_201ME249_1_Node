const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please Enter Title for the Task"],
        maxLength: [30, "Title cannot be greater than 31 Characters"],
        minLength: [3, "Title cannot be less than 3 characters"],
        unique: [true, "Title for the Task Already Exists"],
    },
    description: {
        type: String,
        required: [true, "Please enter a descrption for the Task"],
    },
    socialPlatform: {
        type: String,
        required: [true, "Enter Social Platform"],
        select: false
    },
    club: String,
    subTask: [
        {
            user: {
                type: mongoose.Schema.ObjectId,
                ref: "User",
                // required: true,
            },
            title: {
                type: String,
                required: [true, "Please Enter Title for Sub-Task"],
                maxLength: [30, "Sub-Task Title cannot be greater than 31 Characters"],
                minLength: [3, "Sub-Task cannot be less than 3 characters"],
                unique: [true, "Sub-Task Already Exists"],
            },
            description: {
                type: String,
                required: [true, "Please enter a descrption for the Sub-Task"],
            },
            deadline: {
                type: Date,
                required: [true, "Please Enter Deadline for the Sub-Task"]
            },
            assignee: {
                type: mongoose.Schema.ObjectId,
                ref: "User",
                required: true,
            },
            status: {
                type: Boolean,
                default: false,
            },
            file: {
                type: String,
            },
            createdAt: {
                type: Date,
                default: Date.now()
            }
        }
    ],
    deadline: {
        type: Date,
        required: [true, "Please Enter Deadline for the Task"]
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }

});

module.exports = mongoose.model("Task", taskSchema);