const logger = require('../../utils/logger.js').logger;
const _ = require('lodash');
const path=require('path');
const CatService = require('../../services/Category');
const RequestHandler = require('../../utils/RequestHandler');

var appDir = path.dirname(require.main.filename);
const requestHandler = new RequestHandler(logger);

class Category{

    static async addCategory(req,res){
        try {
            const { title }=req.body;
            const saveCat=await CatService.addCategory(title);
            if (!(_.isNull(saveCat))) {
                requestHandler.sendSuccess(res, 'Category data save sucessfully', 201)(saveCat);
            } else {
                requestHandler.sendError(req, res, error);
            }
        } catch (error) {
            requestHandler.sendError(req, res, error); 
        }
    }

}

module.exports=Category;