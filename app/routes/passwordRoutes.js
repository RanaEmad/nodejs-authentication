const auth=require("../middleware/auth");
const PasswordsController= require("../controllers/PasswordsController");
const express= require("express");
const router= express.Router();

router.use(auth.jwt);
router.get("/",PasswordsController.index);
router.post("/",PasswordsController.store);
router.get("/:id",PasswordsController.show);
router.put("/:id",PasswordsController.update);
router.delete("/:id",PasswordsController.delete);

module.exports= router;