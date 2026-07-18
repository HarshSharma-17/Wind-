exports.validateGenerate = (req, res, next) => {

    const {
        prompt,
        framework,
    } = req.body;

    if (
        !prompt ||
        !prompt.trim()
    ) {
        return res.status(400).json({
            success: false,
            message: "Prompt is required",
        });
    }

    const allowedFrameworks = [

        "react",
        "next",
        "html",
        "reactNative",

    ];

    if (
        framework &&
        !allowedFrameworks.includes(framework)
    ) {
        return res.status(400).json({

            success: false,

            message: "Invalid framework",

        });
    }

    next();

};