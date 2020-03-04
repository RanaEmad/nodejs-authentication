const User= require("../models/User");
const bcrypt= require("bcrypt");
const saltRounds=10;

class UsersController{
    
    constructor(){
    }

    store(req,res){
        const data={
            "name":req.body.name,
            "email":req.body.email,
            "password":bcrypt.hashSync(req.body.password,saltRounds)
        };
        User.create(data)
        .then((result)=>{
            res.json({"id":result.insertId});
        });
    }

    update(req,res){
        const data= {
            "name":req.body.name,
            "email":req.body.email
        };
        User.update(req.params.id,data)
        .then((result)=>{
            res.json({"id":req.params.id});
        });
    }
}

module.exports= new UsersController();