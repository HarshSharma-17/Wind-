const { exportProject } = require("../services/exportService");
const db = require("../config/db");

// =============================
// Create Project
// =============================
exports.createProject = async (req, res) => {
  try {
    const { title, description, code } = req.body;
    const userId = req.user.id;

    if (!title || !code) {
      return res.status(400).json({
        success: false,
        message: "Title and code are required",
      });
    }

    const [result] = await db.query(
      "INSERT INTO projects (title, description, code, user_id) VALUES (?, ?, ?, ?)",
      [title, description, code, userId]
    );

    res.status(201).json({
      success: true,
      message: "Project created successfully",
      projectId: result.insertId,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =============================
// Get All Projects
// =============================
exports.getProjects = async (req, res) => {
  try {
    const userId = req.user.id;

    const [projects] = await db.query(
      "SELECT * FROM projects WHERE user_id = ? ORDER BY created_at DESC",
      [userId]
    );

    res.status(200).json({
      success: true,
      count: projects.length,
      projects,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =============================
// Get Single Project
// =============================
exports.getProjectById = async (req, res) => {
  try {
    const userId = req.user.id;
    const projectId = req.params.id;

    const [project] = await db.query(
      "SELECT * FROM projects WHERE id = ? AND user_id = ?",
      [projectId, userId]
    );

    if (project.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    res.status(200).json({
      success: true,
      project: project[0],
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =============================
// Update Project
// =============================
exports.updateProject = async (req, res) => {
  try {
    const projectId = req.params.id;
    const userId = req.user.id;

    const { title, description, code } = req.body;

    const [result] = await db.query(
      `UPDATE projects
       SET title = ?, description = ?, code = ?
       WHERE id = ? AND user_id = ?`,
      [title, description, code, projectId, userId]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Project updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =============================
// Delete Project
// =============================
exports.deleteProject = async (req, res) => {
  try {
    const projectId = req.params.id;
    const userId = req.user.id;

    const [result] = await db.query(
      "DELETE FROM projects WHERE id = ? AND user_id = ?",
      [projectId, userId]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Project deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//download
exports.downloadProject = async (req, res) => {
  try {
    const projectId = req.params.id;
    const userId = req.user.id;

    const [projects] = await db.query(
      "SELECT * FROM projects WHERE id = ? AND user_id = ?",
      [projectId, userId]
    );

    if (projects.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    await exportProject(res, projects[0]);

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =============================
// Save History as Project
// =============================
exports.saveHistoryAsProject = async (req, res) => {
  try {
    const historyId = req.params.historyId;
    const userId = req.user.id;

    // Find history
    const [history] = await db.query(
      "SELECT * FROM generation_history WHERE id = ? AND user_id = ?",
      [historyId, userId]
    );

    if (history.length === 0) {
      return res.status(404).json({
        success: false,
        message: "History not found",
      });
    }

    const item = history[0];

    // Generate a title from the prompt
    const title =
      item.prompt.length > 50
        ? item.prompt.substring(0, 50) + "..."
        : item.prompt;

    const [result] = await db.query(
      `INSERT INTO projects
      (title, description, code, user_id)
      VALUES (?, ?, ?, ?)`,
      [
        title,
        "Saved from AI Generation",
        item.generated_code,
        userId,
      ]
    );

    res.status(201).json({
      success: true,
      message: "Project saved successfully",
      projectId: result.insertId,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};