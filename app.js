const express= require("express");
const bodyParser= require("body-parser");
const config= require("./app/config/config");
const passport=require("./app/config/passport");
const passwordRoutes=require("./app/routes/passwordRoutes");
const userRoutes=require("./app/routes/userRoutes");
const authRoutes=require("./app/routes/authRoutes");

class App{
    app;
    constructor(){
        this.app=express();
        this.config();
        this.routes();
        this.listen();
    }
    config(){
        this.app.use(bodyParser.urlencoded({extended:true}));
        this.app.use(bodyParser.json());
        this.app.use(passport.initialize());
        this.app.use(passport.session());
    }

    routes(){
        this.app.get("/",(req,res)=>{
            res.send("Welcome!");
        });
        this.app.use("/api/passwords",passwordRoutes);
        this.app.use("/api/users",userRoutes);
        this.app.use("/api/auth",authRoutes);
    }

    listen(){
        this.app.listen(config.port,()=>{
            console.log(`${config.appName} up and running on port ${config.port}...`);
        });
    }

}

module.exports=App;