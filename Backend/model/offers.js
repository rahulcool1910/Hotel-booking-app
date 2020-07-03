const mongoose=require('mongoose')

const OfferSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    AvailableFrom:{
        type:Date,
        required:true
    },
    AvailableTo:{
        type:Date,
        required:true
    },
    imageurl:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    Creator_id:{
        type:String,
        required:true,
    }
});


const Offers=mongoose.model('offers',OfferSchema)

module.exports=Offers;