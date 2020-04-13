
const accountSid = process.env.API_KEY;
const authToken = process.env.AUTH_TOKEN;
console.log(accountSid,"    ",authToken)
const client = require('twilio')(accountSid, authToken);


 module.exports=client