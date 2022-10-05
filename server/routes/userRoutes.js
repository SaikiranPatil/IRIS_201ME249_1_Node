const express = require("express");
const router = express.Router();
const { registerUser, loginUser, logoutUser, forgotPassword, resetPassword, updatePassword} = require("../controller/userController");
const { isAuthenticatedUser } = require("../middleware/authentication.js");

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logoutUser);
router.route("/forgot/password").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);
router.route("/password/update").put(isAuthenticatedUser, updatePassword);

module.exports = router; 