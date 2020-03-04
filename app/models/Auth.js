const bcrypt=require("bcrypt");
class Auth {
    constructor(){
    }
    verifyPassword(password,hash){
        return bcrypt.compareSync(password,hash);
    }
}

module.exports=new Auth(); 