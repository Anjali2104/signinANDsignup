const express = require('express')
const {registerUser,loginUser }= require('../controllers/userController')
const validateRegistration= require('../middleware/validateRegistration')
const validateLogin = require('../middleware/validateLogin')
const router=express.Router()
router.post('/register',validateRegistration,registerUser)
router.post('/login', validateLogin,loginUser)
module.exports=router;