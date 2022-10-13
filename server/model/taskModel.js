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
    subTasks: [
        {
            subTaskTitle: {
                type: String,
                required: [true, "Please Enter Title for the Task"],
                maxLength: [30, "Title cannot be greater than 31 Characters"],
                minLength: [3, "Title cannot be less than 3 characters"],
            },
            assigneeId: {
                type: mongoose.Schema.ObjectId,
                ref: "User",
            },
            description: {
                type: String,
                required: [true, "Please Enter Description for the Task"],
            },
            deadline: {
                type: Date,
                required: [true, "Please Enter Deadline for the Sub-Task"],
            },
            status: {
                type: Boolean,
                default: false,
            },
            assignedById: {
                type: mongoose.Schema.ObjectId,
                ref: "User",
            },
            createdAt: {
                type: Date,
                default: Date.now()
            }
        }
    ],
    noOfsubTasks: {
        type: Number,
        default: 0
    },
    createdBy: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
    },
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