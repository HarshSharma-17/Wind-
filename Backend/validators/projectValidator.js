exports.validateProject = (req, res, next) => {

    const {
        title,
        code,
        framework,
    } = req.body;

    if (
        !title ||
        !code ||
        !framework
    ) {
        return res.status(400).json({
            success: false,
            message: "Title, Framework and Code are required",
        });
    }

    if (
        !title.trim() ||
        !code.trim() ||
        !framework.trim()
    ) {
        return res.status(400).json({
            success: false,
            message: "Fields cannot be empty",
        });
    }

    next();

};