
const express = require('express') 
const userRoutes= require('./routes/userRoutes')
const connecTodb=require('./config/db')
const cors=require('cors')
const app = express()
//connecting to database
connecTodb()
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}))
app.use('/api/auth',userRoutes)
app.use('/',(req,res)=>{
    res.status(200).json({
        data:"Register and Login"
    })
})
module.exports=app