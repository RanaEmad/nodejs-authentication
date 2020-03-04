const Model= require("../core/Model");

class Password extends Model{
    constructor(){
        super("passwords");
    }
}

module.exports=new Password();