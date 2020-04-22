const router=require('express').Router();

router.use('/autho',require('./API/Autho'));
router.use('/user',require('./API/Category'));

module.exports=router;