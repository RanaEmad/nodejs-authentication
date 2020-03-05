const express= require("express");
const path = require("path");
const bodyParser= require("body-parser");
const config= require("./app/config/config");
const passport=require("./app/config/passport");
const passwordRoutes=require("./app/routes/passwordRoutes");
const userRoutes=require("./app/routes/userRoutes");
const authRoutes=require("./app/routes/authRoutes");

const app= express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

app.get("/",(req,res)=>{
    res.send("Welcome!");
});

app.use("/api/passwords",passwordRoutes);
app.use("/api/users",userRoutes);
app.use("/api/auth",authRoutes);

app.listen(config.port,()=>{
    console.log(`${config.appName} up and running on port ${config.port}...`);
});