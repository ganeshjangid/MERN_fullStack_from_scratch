const route=require('express').Router();
const loginController=require('../../controllers/Autho/Login');
const regController=require('../../controllers/Autho/Registration');

route.get('/register',regController.getRegisterPage);
route.get('/login',loginController.loginAutho);

module.exports = route;