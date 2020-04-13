const express=require('express')
const auth=require('./auth.js')
const profile=require('./profile.js')
const route=express.Router();

route.use('/auth',auth)
//route.use('/profile',profile)
route.get('/',()=>{
    res.status(200).json({"Success":"Welcome to app.Documentation is being prepared"})
})

module.exports=route