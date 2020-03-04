const express= require("express");
const mysql= require("mysql");
const path = require("path");
const bodyParser= require("body-parser");
const config= require("./app/config/config");

const app= express();

app.get("/",(req,res)=>{
    res.send("Welcome!");
});

app.listen(config.port,()=>{
    console.log(`${config.appName} up and running on port ${config.port}...`);
});