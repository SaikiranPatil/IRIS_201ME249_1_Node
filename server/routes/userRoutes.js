const express = require("express");
const router = express.Router();
const { registerUser, loginUser, logoutUser } = require("../controller/userController");

router.route("/register").post(registerUser);

module.exports = router; 