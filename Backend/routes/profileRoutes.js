const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  getProfile,
  updateProfile,
} = require("../controllers/authController");

router.get("/", authMiddleware, getProfile);

router.put("/", authMiddleware, updateProfile);

module.exports = router;