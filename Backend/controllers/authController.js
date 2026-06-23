const db = require("../config/db");
const bcrypt = require("bcryptjs");

const signup = async (req, res) => {
  try {
    console.log("Request Body:", req.body);

    const { name, email, password } = req.body;

    // Validation
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Check if user already exists
    const checkUserQuery =
      "SELECT * FROM users WHERE email = ?";

    db.query(checkUserQuery, [email], async (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: false,
          message: "Database Error",
        });
      }

      if (results.length > 0) {
        return res.status(400).json({
          success: false,
          message: "User already exists",
        });
      }

      // Hash Password
      const hashedPassword = await bcrypt.hash(password, 10);

      const insertQuery =
        "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";

      db.query(
        insertQuery,
        [name, email, hashedPassword],
        (err, result) => {
          if (err) {
            console.log(err);
            return res.status(500).json({
              success: false,
              message: "Signup Failed",
            });
          }

          return res.status(201).json({
            success: true,
            message: "User Registered Successfully",
          });
        }
      );
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  signup,
};