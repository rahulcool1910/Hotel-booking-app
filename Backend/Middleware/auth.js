const jwt=require('jsonwebtoken')
module.exports=(req,res,next)=>{
    var isheader=req.headers.authorization
    if(isheader){
        isheader=isheader.split(" ")[1]
        const decoded=jwt.verify(isheader,"ILoveubaby")
        console.log(decoded)
        next();
    }
    else{
        res.json({msg:"Not authorized"})
    }
}