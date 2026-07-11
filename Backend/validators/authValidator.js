exports.validateRegister = (req,res,next)=>{

    const {name,email,password}=req.body;

    if (
      !name ||
      !email ||
      !password ||
      !name.trim() ||
      !email.trim() ||
      !password.trim()
    ) {

        return res.status(400).json({

            success:false,

            message:"All fields are required"

        });

    }

    next();

};

exports.validateLogin=(req,res,next)=>{

    const {email,password}=req.body;

    if (
      !email ||
      !password ||
      !email.trim() ||
      !password.trim()
    ) {

        return res.status(400).json({

            success:false,

            message:"Email and Password are required"

        });

    }

    next();

};