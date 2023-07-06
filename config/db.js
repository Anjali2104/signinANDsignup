const mongoose=require('mongoose')
const connecTodb=async () =>{
    mongoose.connect(process.env.MONGO_URL)
    .then((conn) => {
       console.log(`Connected to DB : ${conn.Connection.host}`) 
    }).catch((err) => {
        console.log(err.message)
        process.exit(1)
    });
}
module.exports=connecTodb

