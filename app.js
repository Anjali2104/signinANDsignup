
const express = require('express') 
const app = express()
const cors=require('cors')
const connecTodb=require('./config/db')
connecTodb()
app.use(express.json())

app.use(cors())
const userRoutes= require('./routes/userRoutes')



app.use(express.urlencoded({extended:true}))
app.use('/',userRoutes)
module.exports=app