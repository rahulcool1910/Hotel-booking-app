const express=require('express');
const booking=express.Router();
const offers=require('../model/offers')
const auth=require('../Middleware/auth')
const multer=require('multer')
const Booking=require('../model/Booking-model');
const Bookings = require('../model/Booking-model');
const User = require('../model/User');


const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'public/images')
    },
    filename:(req,file,cb)=>{
        let _name=file.originalname.split(' ').join('-')
        let ext={'image/jpeg':'jpeg','image/jpg':'jpg','image/png':'png'}[file.mimetype]
        cb(null,_name+"-"+Date.now()+'.'+ext);
        console.log("hello")    
    }
})


var upload=multer({storage:storage});

booking.post('/post',auth,upload.single("image"),(req,res,next)=>{
    console.log(req.body);
    let booked_palce=new Booking({
        name:req.body.name,
        from:req.body.from,
        to:req.body.to,
        image:req.protocol+"://"+req.get('host')+"/public/images/"+req.file.filename,
        User_id:req.body.UserID,
        hotel_id:req.body.hotel_id,
    })
    booked_palce.save()
        .then(result=>{
            res.json({result})
        })
    
})





booking.get('/get/:_id',auth,(req,res,next)=>{
    Bookings.find({User_id:req.params._id})
        .then(data=>{
            res.status(200).json(data)
        })
})


//new offers



// booking.post('/offers',auth,upload2.single('imageurl'),(req,res,next)=>{
//     let Offers=new offers({
//         title:req.body.title,
//         description:req.body.description,
//         AvailableFrom:req.body.AvailableFrom,
//         AvailableTo:req.body.AvailableTo,
//         imageurl:req.protocol+"://"+req.get('host')+"/public/images/"+req.file.filename,
//     })
//     console.log(Offers,req.body,req.file)
//     res.json(1)
// })
module.exports=booking