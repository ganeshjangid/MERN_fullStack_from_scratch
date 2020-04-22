const router=require('express').Router();
const addCatController=require('../../controllers/User/Category');

router.post('/addCategory',addCatController.addCategory);

module.exports=router;