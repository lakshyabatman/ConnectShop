  
const express=require('express')
const route=express.Router();
const authController=require('../controller/authController')

route.post('/sendotp',authController.sendotps)
route.post('/verifyotp',authController.vefifyotp)
route.post('/login',authController.authenticateUser)
module.exports=route


