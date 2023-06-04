const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    username:String,
    email:{
        type:String,
        lowercase:true
    },
    password:String,
    image:String,
    confirm:String,
    role:{
        type:String,
        enum:["admin","buyer","seller"],
        default:"buyer"
    }
},{timestamps:true})

const userModel=mongoose.model('users',userSchema);

module.exports=userModel;