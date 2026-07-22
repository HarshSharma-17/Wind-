const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const {
  register,
  login,
  getProfile,
  updateProfile,
} = require("../controllers/authController");

const {
  validateRegister,
  validateLogin,
} = require("../validators/authValidator");

router.post(
  "/register",
  validateRegister,
  register
);

router.post(
  "/login",
  validateLogin,
  login
);

router.get(
    "/profile",
    authMiddleware,
    getProfile
);

router.put(
    "/profile",
    authMiddleware,
    updateProfile
);

module.exports = router;