// const passport= require("passport");
// const LocalStrategy= require("passport-local");
// const User= require("../models/User");

// passport.use(new LocalStrategy({
//     usernameField: 'email'
//   }, (username,password,done)=>{
//     User.findUserByEmail(username)
//     .then((result)=>{
//         if(!result || !User.verifyPassword(password,result[0].password)){
//             return done(null,false);
//         }
//         return done(null,result[0]);
//     });

// } ));
const passport= require("passport");
const LocalStrategy= require("passport-local");
const User= require("../models/User");
const Auth= require("../models/Auth");

passport.use(new LocalStrategy({
    usernameField: 'email'
  }, (username,password,done)=>{
    User.findUserByEmail(username)
    .then((result)=>{
        if(!result || !Auth.verifyPassword(password,result[0].password)){
            return done(null,false);
        }
        return done(null,result[0]);
    });

} ));
passport.serializeUser(function(user, cb) {
    cb(null, user.id);
  });
  
  passport.deserializeUser(function(id, cb) {
    User.findById(id).then((result)=>{
        cb(null, result[0]);
    });
  });

  module.exports=passport;