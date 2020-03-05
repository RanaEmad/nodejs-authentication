const auth=require("../middleware/auth");
const PasswordsController= require("../controllers/PasswordsController");
const express= require("express");
const router= express.Router();
const validate= require("../middleware/validation");

router.use(auth.jwt);
router.get("/",PasswordsController.index);
router.post("/",validate(PasswordsController.validationRules.store),PasswordsController.store);
router.get("/:id",PasswordsController.show);
router.put("/:id",validate(PasswordsController.validationRules.update),PasswordsController.update);
router.delete("/:id",PasswordsController.delete);

module.exports= router;