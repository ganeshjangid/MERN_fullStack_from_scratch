const _ = require('lodash');
const { CatModel, validate } = require('../models/Category');
const RequestHandler = require('../utils/RequestHandler');
const logger = require('../utils/logger.js').logger;
const errHandler = new RequestHandler(logger);

class Category{

    static async addCategory(data){
        try {
        const { error } = validate(data);
        if (error) {
            return Promise.reject({message:error.details[0].message});  
        }

        

        } catch (error) {
            
        }
    }


}

module.exports=Category;