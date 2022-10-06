const express = require("express");
const router = express.Router();
const {
    registerUser,
    loginUser,
    logoutUser,
    forgotPassword,
    resetPassword,
    updatePassword,
    updateProfile,
    getUserDetails,
    getAllUsersByAdmin,
    getAllUsersByClubAdmin,
    getSingleUserByAdmin,
    getSingleUserByClubAdmin,
    updateUserRoleByAdmin,
    updateUserRoleByClubAdmin,
    deleteUserByAdmin,
    deleteUserByClubAdmin
} = require("../controller/userController");
const {
    isAuthenticatedUser,
    authorizeRoles
} = require("../middleware/authentication.js");

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logoutUser);
router.route("/forgot/password").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);
router.route("/password/update").put(isAuthenticatedUser, updatePassword);
router.route("/me").get(isAuthenticatedUser, getUserDetails);
router.route("/me/update").put(isAuthenticatedUser, updateProfile);
router.route("/admin/users").get(isAuthenticatedUser, authorizeRoles("admin"), getAllUsersByAdmin)
router.route("/admin/user/:id").get(isAuthenticatedUser, authorizeRoles("admin"), getSingleUserByAdmin).put(isAuthenticatedUser, authorizeRoles("admin"), updateUserRoleByAdmin).delete(isAuthenticatedUser, authorizeRoles("admin"), deleteUserByAdmin);
router.route("/cadmin/users").get(isAuthenticatedUser, authorizeRoles("cadmin"), getAllUsersByClubAdmin)
router.route("/cadmin/user/:id").get(isAuthenticatedUser, authorizeRoles("cadmin"), getSingleUserByClubAdmin).put(isAuthenticatedUser, authorizeRoles("cadmin"), updateUserRoleByClubAdmin).delete(isAuthenticatedUser, authorizeRoles("cadmin"), deleteUserByClubAdmin);

module.exports = router; 