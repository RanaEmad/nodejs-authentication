const User= require("../models/Auth");
const passport= require("../config/passport");

class AuthController{
    
    constructor(){
    }

    authenticate(req, res, next){
        passport.authenticate('local', (err, user, info) =>{
            if (err) { return next(err); }
            if (!user) { return res.json({"msg":"not found"}); }
            req.logIn(user, function(err) {
            if (err) { return next(err); }
            return res.json(user);
            });
        })(req, res, next);
    }
}

module.exports= new AuthController();