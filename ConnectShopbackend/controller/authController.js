const Shop=require('../modals/shop')
const Token=require('../modals/token')
let twilio=require('../essential/twilio')
const passport=require('passport')
const jwt=require('jsonwebtoken')
module.exports={
sendotps:async(req,res)=>{
    try
    {
        let sendno=req.body.number;
        let otp=Math.floor(100000 + Math.random() * 900000);
         let message="Welcome to our platform your OTP is: "+otp
         console.log(message)
         //let result=await twilio.messages.create({body: 'Hi there!', from: '+19164367478', to: '+918765585353'})    
         let token=new Token();
         token.otp=otp
         token.phone=sendno
         let tokensave=await token.save();
         console.log(tokensave)
         res.status(200).json({success:"OTP SEND"});
        }
    catch(err)
    {
        res.status(401).json({error:err})
    }
},
vefifyotp:async(req,res)=>
{
try
{
let otp=await Token.findOne({phone:req.body.phone}).sort({createdAt:-1});
if(otp)
{
    if(otp.otp==req.body.otp)
    {
        let entity=new Shop();
        entity.phone=req.body.phone;
        let saved=await entity.save();
        const token=jwt.sign({id:req.body.phone},process.env.JWT_SECRET)
        res.status(200).send({user:entity,token:token})
    }
    else
    {
        res.status(401).json({success:"OTP IS WRONG. TRY AGAIN"})
    }
}
else
{
    res.status(401).json({error:"Otp is expired.Please Try again"});
}
}
catch(err)
{
    console.log(err)
res.status(401).json({error:err})
}
},
authenticateUser:async(req,res,next)=>{  
    passport.authenticate('login',(err,user,info)=>
    {
    
        if(err)
        {
            res.status(401).json({error:err})
        }
        if(info!=undefined)
        {
            res.send(info)
        }
        if(user==false)
      {
        res.status(401).json({error:"USER NOT FOUND"})
      }
      else
      {
        req.logIn(user,err=>{
            Shop.findOne({phone:user.phone}).then((use)=>{
              const token=jwt.sign({id:user.phone},process.env.JWT_SECRET)
              res.status(200).send({
                user:use,
                token:token
              })
            })
          })
      }
    })(req,res.next)
}


}
