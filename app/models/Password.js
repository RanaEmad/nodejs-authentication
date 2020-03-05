const Model= require("../core/Model");

class Password extends Model{
    constructor(){
        super("passwords");
    }

    findUserPasswords(user_id){
        const sql=`SELECT * FROM ${this.table} WHERE user_id='${user_id}';`;
        return this.excecute(sql);
    }
}

module.exports=new Password();