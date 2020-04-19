const path=require('path');
const RegService = require('../../services/Registration');
var appDir = path.dirname(require.main.filename);


class Registration extends RegService {

     static async getRegisterPage(req,res){
       res.sendFile(path.join(appDir,'../../', 'client/public/', 'login.html'));
       //console.log(appDir);
     }   
}

module.exports=Registration;