const mongoose=require('mongoose')
const Schema=mongoose.Schema;

let tag=new Schema
({
name:
{
type:String
},
count:{
    type:Number,
    default:0
}
})

const tg = mongoose.model('Tag', tag)
module.exports = tg