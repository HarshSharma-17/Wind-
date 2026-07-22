const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    try {
        console.log("Authorization Header:", req.headers.authorization);

        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return res.status(401).json({
                success: false,
                message: "Authorization header missing",
            });
        }

        const token = authHeader.split(" ")[1];

        console.log("Token:", token);

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        console.log("Decoded:", decoded);

        req.user = decoded;

        next();
    } catch (error) {
        console.log("JWT Error:", error.message);

        return res.status(401).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = authMiddleware;