const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  generateController,
  getHistory,
  deleteHistory,
} = require("../controllers/generateController");

const {
  validateGenerate,
} = require("../validators/generateValidator");

// Generate Code
router.post(
  "/",
  authMiddleware,
  validateGenerate,
  generateController
);

// Get History
router.get(
  "/history",
  authMiddleware,
  getHistory
);

// Delete History
router.delete(
  "/history/:id",
  authMiddleware,
  deleteHistory
);

module.exports = router;