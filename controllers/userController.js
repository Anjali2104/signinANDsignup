const userModel=require('../models/userModel')
// Registration
exports.registerUser = async (req,res)=>{
  const {name,email,password,confirmPassword}=req.body
   try {
     const userInfo = userModel(req.body)
     const result= await userInfo.save()
      return res.status(200).json({
        success:true,
        data:result,
         message:'User Registered Successfully'
      })

   } 
   catch (error) {
    // checking if the account already exits with this email
      if(error.code === 11000){
        return res.status(400).json({
         success:false,
         message:"Account already exist"
      });
    }
      
     return  res.status(400).json({
        success:false,
        message:error.message
      })
   }
}
//Login
exports.loginUser= async (req,res)=>{
   const {email,password}=req.body
   try {
    const user = await userModel
        .findOne({email})
        .select('+password');
        // checking if user exits with this email
        if(!user ){
          return res.status(400).json({
            success:false,
            message:"No account associated with this email"
          })
        }
        // checking if password matches  with the user password
        if(password !== user.password){
          return res.status(400).json({
            success:false,
            message:"Password is wrong"
          })
        }
        res.status(200).json({
          success:true,
          //data:user,
          message:"User logged in successfully!"
        })
   } catch (error) {
      return res.status(400).json({
        success:false,
        message:error.message
      })
   }
}