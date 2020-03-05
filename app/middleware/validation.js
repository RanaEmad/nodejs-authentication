const Validator= require("validatorjs");

let validate=(rules)=>{
    return (req,res,next)=>{
        let validation = new Validator(req.body, rules,{}); 
        if(validation.passes()){
            next();
        }
        else{
            res.json(validation.errors);
        }
    };
}

module.exports= validate;