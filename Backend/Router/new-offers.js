const express=require('express');
const multer=require('multer');
const  offer=require('../model/offers');
const auth = require('../Middleware/auth');
const booking=require('../model/Booking-model')
const Offers=express.Router()



const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'public/offer-images')
    },
    filename:(req,file,cb)=>{
        let _name=file.originalname.split(' ').join('-')
        let ext={'image/jpeg':'jpeg','image/jpg':'jpg','image/png':'png'}[file.mimetype]
        cb(null,_name+"-"+Date.now()+'.'+ext);  
        // console.log("hello")     
    }
})

let upload=multer({storage:storage})

Offers.get('/get-offers',(req,res,next)=>{
    offer.find({Creator_id:req.body._id})
        .then(data=>{
            res.json(data)
        })
})

Offers.get('/about/:_id',(req,res,next)=>{
    // console.log(req.params._id)
    offer.find({Creator_id:req.params._id})
        .then(data=>{
            res.json(data);
            // console.log(data)
        })
})



Offers.post('/new-offers',auth,upload.single('imageurl'),(req,res,next)=>{
    let Offers=new offer({
        title:req.body.title,
        description:req.body.description,
        AvailableFrom:req.body.AvailableFrom,
        AvailableTo:req.body.AvailableTo,
        imageurl:req.protocol+"://"+req.get('host')+"/public/offer-images/"+req.file.filename,
        Creator_id:req.body.Creator_id,
        price:req.body.price
    })
    Offers.save()
        .then(data=>{
            res.json(data)
        })
        .catch(err=>{
            res.json(err)
        })
})


module.exports=Offers;


