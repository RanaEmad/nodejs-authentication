const User= require("../models/Auth");
const passport= require("../config/passport");
const jwt= require("jsonwebtoken");

class AuthController{
    
    constructor(){
    }

    authenticate(req, res, next){
        passport.authenticate('local', (err, user, info) =>{
            if (err) { return next(err); }
            if (!user) { return res.json({"msg":"not found"}); }
            req.logIn(user, function(err) {
            if (err) { return next(err); }
            const body = { id : user.id, email : user.email };
            user.token=jwt.sign({user:body},process.env.JWT_SECRET);
            return res.json(user);
            });
        })(req, res, next);
    }
}

module.exports= new AuthController();