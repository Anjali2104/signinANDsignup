const mongoose=require('mongoose')
// database model
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true,'Name is required'],
        trim:true,
        maxLength: [25,'Name must be less than 25 chars']
    },
    email : {
        type: String,
        trim: true,
        unique: [true,"email must be unique"],
        required: [true,'Email address is required']
    },
   password: { 
    type: String, 
    required: true 
   }
})

module.exports=mongoose.model('User',userSchema)