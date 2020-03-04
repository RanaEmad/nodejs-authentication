const Model= require("../core/Model");
const bcrypt= require("bcrypt");

class User extends Model{
    constructor(){
        super("users");
    }

    findUserByEmail(email){
        const sql=`SELECT * FROM ${this.table} WHERE email='${email}';`;
        return this.excecute(sql);
    }
}

module.exports=new User();