let mongoose=require('mongoose')
const Schema=mongoose.Schema;

let token=new Schema({
    phone:{
        type:String
    },
    otp:{
        type:Number
    },
    createdAt:{
        type:Date,
        index: { expires:'5m'},
        default:Date.now()
    }
})
let tok=mongoose.model("otp",token)
module.exports=tok