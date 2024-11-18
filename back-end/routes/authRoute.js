const express = require("express");
const {
  createUser,
  loginUser,
  getAllUser,
  getaUser,
  deleteaUser,
  updateaUser,
  blockUser,
  unBlockUser,
  handlerRefreshToken,
  updatePassword,
  forgotPassword,
  resetPassword,
} = require("../controller/userController");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/register", createUser);
router.put("/password", authMiddleware, updatePassword);
router.post("/forgot-password-token", forgotPassword);
router.put("/reset-password/:token", resetPassword);

router.post("/login", loginUser);
router.post("/refresh-token", handlerRefreshToken);
router.get("/all-users", authMiddleware, isAdmin, getAllUser);
router.get("/:id", authMiddleware, getaUser);
router.delete("/:id", authMiddleware, deleteaUser);
router.put("/edit-user", authMiddleware, updateaUser);
router.put("/block-user/:id", authMiddleware, isAdmin, blockUser);
router.put("/unblock-user/:id", authMiddleware, isAdmin, unBlockUser);

module.exports = router;
