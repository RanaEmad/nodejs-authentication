const auth=require("../middleware/auth");
const UsersController= require("../controllers/UsersController");
const express= require("express");
const router= express.Router();
const validate= require("../middleware/validation");

router.post('/register',validate(UsersController.validationRules.store) ,UsersController.store);
router.put('/:id',auth.jwt,validate(UsersController.validationRules.update), UsersController.update);

module.exports= router;