const express= require("express");
const mysql= require("mysql");
const path = require("path");
const bodyParser= require("body-parser");
const config= require("./app/config/config");
const PasswordsController= require("./app/controllers/PasswordsController");
const passport=require("./app/config/passport");
const AuthController= require("./app/controllers/AuthController");
const UsersController= require("./app/controllers/UsersController");

const app= express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

app.get("/",(req,res)=>{
    res.send("Welcome!");
});

app.get("/passwords",passport.authenticate('jwt', { session : false }),PasswordsController.index);
app.post("/passwords",passport.authenticate('jwt', { session : false }),PasswordsController.store);
app.get("/passwords/:id",passport.authenticate('jwt', { session : false }),PasswordsController.show);
app.put("/passwords/:id",passport.authenticate('jwt', { session : false }),PasswordsController.update);
app.delete("/passwords/:id",passport.authenticate('jwt', { session : false }),PasswordsController.delete);

app.post('/register', UsersController.store);
app.post('/login', AuthController.authenticate);

app.put('/users/:id',passport.authenticate('jwt', { session : false }), UsersController.update);

app.listen(config.port,()=>{
    console.log(`${config.appName} up and running on port ${config.port}...`);
});