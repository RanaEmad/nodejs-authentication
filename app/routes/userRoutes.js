const auth=require("../middleware/auth");
const UsersController= require("../controllers/UsersController");
const express= require("express");
const router= express.Router();

router.post('/register', UsersController.store);
router.put('/:id',auth.jwt, UsersController.update);

module.exports= router;