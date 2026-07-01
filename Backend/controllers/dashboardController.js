const db = require("../config/db");

exports.getDashboard = async (req, res) => {
  try {
    const userId = req.user.id;

    // User Details
    const [users] = await db.query(
      "SELECT id, name, email FROM users WHERE id = ?",
      [userId]
    );

    const user = users[0];

    // Total Projects
    const [projectCount] = await db.query(
      "SELECT COUNT(*) AS totalProjects FROM projects WHERE user_id = ?",
      [userId]
    );

    // Total Generations
    const [historyCount] = await db.query(
      "SELECT COUNT(*) AS totalGenerations FROM generation_history WHERE user_id = ?",
      [userId]
    );

    // Recent Projects
    const [recentProjects] = await db.query(
      `SELECT id,title,description,created_at
       FROM projects
       WHERE user_id = ?
       ORDER BY created_at DESC
       LIMIT 5`,
      [userId]
    );

    // Recent History
    const [recentHistory] = await db.query(
      `SELECT id,prompt,created_at
       FROM generation_history
       WHERE user_id = ?
       ORDER BY created_at DESC
       LIMIT 5`,
      [userId]
    );

    res.status(200).json({
      success: true,

      user,

      stats: {
        totalProjects: projectCount[0].totalProjects,
        totalGenerations: historyCount[0].totalGenerations,
      },

      recentProjects,

      recentHistory,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};