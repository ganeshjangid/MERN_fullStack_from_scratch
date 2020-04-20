const _ = require('lodash');
const { RegModel, validate } = require('../models/Registration');
const RequestHandler = require('../utils/RequestHandler');
const logger = require('../utils/logger.js').logger;
const errHandler = new RequestHandler(logger);
class Registration{
    
    static async saveRegData(data){
        try {
        const { error } = validate(data);

        if (error) {
            return Promise.reject({message:error.details[0].message});  
        }

        await RegModel.findOne({ username: data.username})
        .then(async existRecords =>{                 //console.log(existRecords);
            if (!(_.isNull(existRecords))) {
                return Promise.reject({message:"Username is already Exist."});  
                 
            }else{
                await new RegModel(data).save().then(errHandler.throwIf(r => !r, 500, 'Internal server error', 'something went wrong couldnt save in Register data'),errHandler.throwError(500, 'mongodb error')
                ).then(saveData=> Promise.resolve(saveData));
            } 
        })     
        } catch (error) {
            return Promise.reject(error);
        }
    }

}

module.exports=Registration;