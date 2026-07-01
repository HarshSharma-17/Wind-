const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  validateProject,
} = require("../validators/projectValidator");

const {
  createProject,
  saveHistoryAsProject,
  getProjects,
  downloadProject,
  getProjectById,
  updateProject,
  deleteProject,
} = require("../controllers/projectController");

// Create Project
router.post(
  "/",
  authMiddleware,
  validateProject,
  createProject
);

// Save History as Project
router.post(
  "/save/:historyId",
  authMiddleware,
  saveHistoryAsProject
);

// Get All Projects
router.get(
  "/",
  authMiddleware,
  getProjects
);

// Download Project
router.get(
  "/:id/download",
  authMiddleware,
  downloadProject
);

// Get Single Project
router.get(
  "/:id",
  authMiddleware,
  getProjectById
);

// Update Project
router.put(
  "/:id",
  authMiddleware,
  validateProject,
  updateProject
);

// Delete Project
router.delete(
  "/:id",
  authMiddleware,
  deleteProject
);

module.exports = router;