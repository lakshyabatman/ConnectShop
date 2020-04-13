require('dotenv').config()
require('./config/passport')
require('./config/mongoose')
const express=require('express')
const bodyparser=require('body-parser')
const passport=require('passport')
const route=require('./routes/route.js')
const app=express();
app.use(bodyparser.urlencoded({extended:true}))
app.use(passport.initialize());
app.use(route)



app.listen(3000,()=>{
    console.log("SERVER RUNNING")
})

