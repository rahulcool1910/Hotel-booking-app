const express=require('express')
const router=express.Router()
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const User=require('../model/User')


router.post('/signin',(req,res,next)=>{
 
    bcrypt.hash(req.body.password,10)
        .then(hash=>{
            const user=new User({
                email:req.body.email,
                password:hash
            });
            console.log(user)
            user.save()
                .then(msg=>{
                    res.json(msg)
                })
                .catch(err=>{
                    res.json(err)
                })
            
        })
})

router.post('/login',(req,res,next)=>{
    User.findOne({email:req.body.email})
        .then(response=>{
            if(response){
                bcrypt.compare(req.body.password,response.password)
                    .then(status=>{
                        const token=jwt.sign({email:response.email,_id:response._id},"ILoveubaby",{expiresIn:(3600*24)})
                        res.json({token:token,expiresIn:3600,_id:response._id})
                    })
                    .catch(err=>{
                        res.json(err)
                    })

            }
        })
        .catch(err=>{
            res.json(err)
        })
})


module.exports=router