const mongoose=require('mongoose')

const Userschema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})



Userschema.plugin(require('mongoose-unique-validator'))

const User=mongoose.model("User",Userschema);

module.exports=User;