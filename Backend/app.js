const express=require('express');
const app=express()
const cors=require('cors')
const mongoose=require('mongoose')
const Offer=require('./model/offers');
const Offers = require('./model/offers');

app.use(cors())
app.use(express.json())
app.use(express.static('public'))
app.use('/public', express.static('public'))
mongoose.set('useCreateIndex', true)
mongoose.connect("mongodb+srv://rahulcool:sagarika@cluster0-v6don.mongodb.net/test?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true})
    .then(response=>{
        console.log("connected");
    })
app.use('/auth',require('./Router/auth-router'))

app.use('/booking',require('./Router/Booking.-router'))
app.use(express.urlencoded({extended:false}))

app.get('/offers',(req,res,next)=>{
    Offers.find({}).then(result=>{
        res.json(result);
    })
})
app.use('/new',require('./Router/new-offers'));

app.post('/post-offers',(req,res,next)=>{
    let data=new Offer({
        title:req.body.title,
        description:req.body.description,
        AvailableFrom:req.body.AvailableFrom,
        AvailableTo:req.body.AvailableTo,
        price:req.body.price,
        imageurl:req.body.imageurl
    })
    data.save()
        .then(data=>{
            res.status(200).json(data);
        })
})
app.listen(3000,()=>{
    console.log("started")
})