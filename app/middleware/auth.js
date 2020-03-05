const passport=require("../config/passport");
module.exports={
    jwt: passport.authenticate('jwt', { session : false })
};