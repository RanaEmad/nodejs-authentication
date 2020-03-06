const User= require("../models/User");
const bcrypt= require("bcrypt");
const saltRounds=10;

class UsersController{
    
    validationRules;
    constructor(){
        this.setValidationRules();
    }

    async store(req,res){
        let exists = await User.findUserByEmail(req.body.email);
        if(exists!=false){
            res.status(400).json({"errors":{"email":"The email already exists."}});
        }
        else{
            const data={
                "name":req.body.name,
                "email":req.body.email,
                "password":bcrypt.hashSync(req.body.password,saltRounds)
            };
            User.create(data)
            .then((result)=>{
                res.status(201).json({"id":result.insertId});
            })
            .catch((err)=>{
                res.json({"msg":"service unavailable"});
            });
        }
    }

    async update(req,res){
        let exists = await User.findUserByEmail(req.body.email);
        if(exists!=false && exists[0].id!=req.user.id){
            res.status(400).json({"errors":{"email":"The email already exists."}});
        }
        else{
            User.findById(req.user.id)
            .then((exists)=>{
                if(exists==false){
                    res.status(400).json({"msg":"resource not found"});
                }
                else{
                    
                    const data= {
                        "name":req.body.name,
                        "email":req.body.email
                    };
                    User.update(req.user.id,data)
                    .then((result)=>{
                        res.status(200).json({"id":req.params.id, "name":data.name,"email":data.email});
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

    setValidationRules(){
        this.validationRules={
            "store":{
                "name":"required",
                "email":"required|email",
                "password":"required|between:6,15"
            },
            "update":{
                "name":"required",
                "email":"required|email"
            }
        };
    }
}

module.exports= new UsersController();