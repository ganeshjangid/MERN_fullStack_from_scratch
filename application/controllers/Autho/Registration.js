const logger = require('../../utils/logger.js').logger;
const _ = require('lodash');
const path=require('path');
const RegService = require('../../services/Registration');
const RequestHandler = require('../../utils/RequestHandler');

var appDir = path.dirname(require.main.filename);
const requestHandler = new RequestHandler(logger);


class Registration extends RegService {

     static async getRegisterPage(req,res){
       res.sendFile(path.join(appDir,'../../', 'client/public/', 'login.html'));
       //console.log(appDir);
     }   

     static async saveReg(req,res){
      try {  
        const SaveData=await RegService.saveRegData(req.body);
        console.log(SaveData);
        if (!(_.isNull(SaveData))) {
        requestHandler.sendSuccess(res, 'Registration data save sucessfully', 201)(SaveData);
        } else {
          requestHandler.sendError(req, res, error);
        }  
      }catch(err) {
        requestHandler.sendError(req, res, err);
      }
     
       


     }
     
}

module.exports=Registration;