exports.validateProject=(req,res,next)=>{

    const {title,code}=req.body;

    if(!title || !code){

        return res.status(400).json({

            success:false,

            message:"Title and Code are required"

        });

    }

    next();

};