const checkRequiredFields = (req, res, next) => {
    const { name, email, password ,confirmPassword} = req.body;
  // checking if all inputs fields are provided by the user
    if (!name || !email || !password) {
      return res.status(400).json({ 
        success:false,
        message: 'All input fields are required' });
    }
    // checking if password and confirmPassword don't match
    if(password!=confirmPassword){
      return res.status(400).json({
        success:false,
        message:"password and confirmPassword don't match!"
      })
    }
    next();
  };
  module.exports=checkRequiredFields;