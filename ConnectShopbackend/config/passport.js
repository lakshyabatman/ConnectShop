const passport=require('passport');
const localstrategy=require('passport-local').Strategy;
const JWTStrategy=require('passport-jwt').Strategy
const ExtractJWT=require('passport-jwt').ExtractJwt

const Shop=require('../modals/shop')

passport.use('login',new localstrategy({
    usernameField:'phone',
    passwordField:'password',
    session:false
},async (number,password,done)=>
{
try
{
    console.log(number,password)
    let user=await Shop.findByCredentials(number,passport)
    done(null,user);
}
catch(err)
{
    console.log(err)
    done(err)
}
}))



const opts={
    jwtFromRequest:ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey:process.env.JWT_SECRET
}

passport.use('jwt',new JWTStrategy(opts,(jwtpayload,done)=>{
    try{
        User.findOne({
            phone:jwtpayload.id
        }).then((user)=>{

            if(user)
            {
                done(null,user)
            }
            else
            {
                done(null,false)
            }
        })
    }
    catch(err)
    {
        done(err)
    }
}))