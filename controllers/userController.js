const userModel=require('../models/userModel')
exports.home= (req,res)=>{
  res.send("<h1>Welcome to the Homepage</h1>")
}
exports.registerUser = async (req,res)=>{
   try {
    const {name,email,password}=req.body
   
    const userInfo = userModel(req.body)
    const result= await userInfo.save()
    return res.status(200).json({
        success:true,
        data:result,
        message:'User Registered Successfully'
    })

   } catch (error) {
      console.log(error)
      res.status(400).json({
        success:false,
        message:error.message
      })
   }
}
exports.loginUser= async (req,res)=>{
   
}