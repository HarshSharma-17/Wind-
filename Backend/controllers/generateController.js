const db = require("../config/db");

const { generateCode } = require("../services/groqService");
const prompts = require("../utils/prompts");

// =========================================
// Generate AI Project
// =========================================
exports.generateController = async (req, res) => {
  try {
    const { prompt, framework = "react" } = req.body;
    const userId = req.user.id;

    if (!prompt) {
      return res.status(400).json({
        success: false,
        message: "Prompt is required",
      });
    }

    if (!prompts[framework]) {
      return res.status(400).json({
        success: false,
        message:
          "Invalid framework. Supported: react, html, next, reactNative",
      });
    }

    // Build AI Prompt
    const finalPrompt = prompts[framework](prompt);

    // Generate AI Code
    const generatedProject = await generateCode(finalPrompt, framework);

    // Save in Database
    await db.query(
      "INSERT INTO generation_history (user_id, prompt, generated_code) VALUES (?, ?, ?)",
      [
        userId,
        prompt,
        JSON.stringify(generatedProject),
      ]
    );

    res.status(201).json({
      success: true,
      message: "Project generated successfully",
      project: generatedProject,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =========================================
// Get Generation History
// =========================================
exports.getHistory = async (req, res) => {
  try {
    const userId = req.user.id;

    const [history] = await db.query(
      "SELECT * FROM generation_history WHERE user_id = ? ORDER BY created_at DESC",
      [userId]
    );

    // const formattedHistory = history.map((item) => ({
    //   ...item,
    //   generated_code: JSON.parse(item.generated_code),
    // }));

    res.status(200).json({
      success: true,
      history,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =========================================
// Delete Generation History
// =========================================
exports.deleteHistory = async (req, res) => {
  try {
    const historyId = req.params.id;
    const userId = req.user.id;

    const [result] = await db.query(
      "DELETE FROM generation_history WHERE id = ? AND user_id = ?",
      [historyId, userId]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: "History not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "History deleted successfully",
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};