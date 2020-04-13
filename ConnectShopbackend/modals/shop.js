const validator = require('validator')
const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const Schema=mongoose.Schema;
const GeoSchema = new Schema({
    type: {
        type: String,
        default: "Point"
    },
    coordinates: {
        type: [Number],
        index: "2dsphere"
    }
});
const saltRounds = 8
const shop=new Schema
({
isRetailer:{
    type:Boolean
},
password: {
    type: String,
    trim: true,
    minlength: 6
  },
location:GeoSchema,
name:{
    type:String
},
phone:{
    type:String,
    required:true
},
retailerDetails:
{
tags:{
    type: Schema.Types.ObjectId,
    ref: 'Tag'
},
address:{
    type:String
},
isOpened:{
    type:Boolean
},
currentStatus:{
    type:Number
},
openedTill:{
    type:String
},
itemsAvailable:{
    type:[String]
}
}
})
//statics can directly invoked by schema model
shop.statics.findByCredentials = async (phone, password) => {
    const user = await shp.findOne({phone:phone})
  console.log("!!!!!!",user)
    if (!user) {
      throw new Error('No such user')
    } else {
      const isMatch = await bcrypt.compare(password, user.password)
      if (!isMatch) {
        throw new Error('Incorrect password provided')
      } else {
        return user
      }
    }
  }




shop.pre('save', async function (next) {
    const user = this
  
    if (user.isModified('password')) {
      user.password = await bcrypt.hash(user.password, saltRounds)
    }
  
    next()
  })


const shp = mongoose.model('Shop', shop)
module.exports = shp
