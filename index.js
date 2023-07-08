require('dotenv').config()
const PORT = process.env.PORT || 3005
const app=require('./app')

app.listen(PORT,()=>{
    console.log(`server is listening on http://localhost:${PORT}`)
})