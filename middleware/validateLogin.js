const checkRequiredParameters =  (req,res,next) => {
  const {email,password} =req.body;
  // checking if email && password are provided by the user or not for login
  if(!email || !password) {
    return res.status(400).json({
        success:false,
        message:"All Input fields are required!"
    })
  }
  next();
};
module.exports=checkRequiredParameters;