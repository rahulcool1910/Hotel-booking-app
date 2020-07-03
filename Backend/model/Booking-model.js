const mongoose=require('mongoose');


const BookingSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    from:{
        type:Date,
        required:true
    },
    to:{
        type:Date,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    User_id:{
        type:String,
        required:true
    },
    hotel_id:{
        type:String,
        required:true
    }
})


const Bookings=mongoose.model("Booking-model",BookingSchema)

module.exports=Bookings;
