const express = require('express')
const {home,registerUser,loginUser }= require('../controllers/userController')
const router=express.Router()
router.get('/',home)
router.post('/register',registerUser)
module.exports=router