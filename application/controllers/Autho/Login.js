const LoginService = require('../../services/Login');
class Login extends LoginService {
     static async loginAutho(req,res){
         try {
             const body=req.body;
             const testApi = await LoginService.TestApi(body);
             console.log(testApi);


         } catch (error) {
             console.log(error);
         }
     }   
}

module.exports=Login;