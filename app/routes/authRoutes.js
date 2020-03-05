const auth=require("../middleware/auth");
const AuthController= require("../controllers/AuthController");
const express= require("express");
const router= express.Router();

router.post('/login', AuthController.authenticate);

module.exports= router;