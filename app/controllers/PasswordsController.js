const Password= require("../models/Password");
class PasswordsController{

    constructor(){
    }

    index(req,res){
        Password.findUserPasswords(req.user.id)
        .then((results)=>{
            res.json(results);
        });
    }

    show(req,res){
        Password.findById(req.params.id)
        .then((result)=>{
            res.json(result);
        });
    }

    store(req,res){
        const data= {
            "user_id":req.user.id,
            "type":req.body.type,
            "value":req.body.value
        };
        Password.create(data)
        .then((result)=>{
            res.json({"id":result.insertId});
        });
    }

    update(req,res){
        const data= {
            "type":req.body.type,
            "value":req.body.value
        };
        Password.update(req.params.id,data)
        .then((result)=>{
            res.json({"id":req.params.id});
        });
    }

    delete(req,res){
        Password.delete(req.params.id)
        .then((result)=>{
            res.json({"id":req.params.id});
        });
    }
}

module.exports= new PasswordsController();