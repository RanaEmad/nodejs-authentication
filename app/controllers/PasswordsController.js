const Password= require("../models/Password");
class PasswordsController{

    constructor(){
    }

    index(req,res){
        Password.findUserPasswords(req.user.id)
        .then((results)=>{
            let json=[];
            results.forEach((password)=>{
                json.push({
                    "id":password.id,
                    "type":password.type,
                    "value":password.value
                });
            });
            res.status(200).json(json);
        })
        .catch((err)=>{
            res.json({"msg":"service unavailable"});
        });
    }

    show(req,res){
        Password.findById(req.params.id)
        .then((result)=>{
            if(result==false){
                res.status(400).json({"msg":"resource not found"});
            }
            else if(result[0].user_id!=req.user.id){
                res.status(401).json({"msg":"unauthorized access"});
            }
            else{
                let json={
                    "id":result[0].id,
                    "type":result[0].type,
                    "value":result[0].value
                }
                res.status(200).json(json);
            }
        })
        .catch((err)=>{
            res.json({"msg":"service unavailable"});
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
            res.status(201).json({"id":result.insertId});
        })
        .catch((err)=>{
            res.json({"msg":"service unavailable"});
        });
    }

    update(req,res){
        Password.findById(req.params.id)
        .then((exists)=>{
            if(exists==false){
                res.status(400).json({"msg":"resource not found"});
            }
            else if(exists[0].user_id!=req.user.id){
                res.status(401).json({"msg":"unauthorized access"});
            }
            else{
                
                const data= {
                    "type":req.body.type,
                    "value":req.body.value
                };
                Password.update(req.params.id,data)
                .then((result)=>{
                    res.status(200).json({"id":req.params.id,"type":data.type,"value":data.value});
                })
                .catch((err)=>{
                    res.json({"msg":"service unavailable"});
                });

            }
        })
        .catch((err)=>{
            res.json({"msg":"service unavailable"});
        });
    }

    delete(req,res){
        Password.findById(req.params.id)
        .then((exists)=>{
            if(exists==false){
                res.status(400).json({"msg":"resource not found"});
            }
            else if(exists[0].user_id!=req.user.id){
                res.status(401).json({"msg":"unauthorized access"});
            }
            else{
                
                Password.delete(req.params.id)
                .then((result)=>{
                    res.status(200).json({"msg":"resource deleted successfully"});
                })
                .catch((err)=>{
                    res.json({"msg":"service unavailable"});
                });

            }
        })
        .catch((err)=>{
            res.json({"msg":"service unavailable"});
        });
    }

}

module.exports= new PasswordsController();