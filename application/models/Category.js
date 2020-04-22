require('./Database');
const Joi = require('joi');

const Category=new Schema({
    title:{type:String,require:true,trim:true,index:true}
},{
    timestamps: { createdAt: true, updatedAt: false }
});

module.exports = mongoose.model('Category', Category);

function validateCat(Category) {
    const schema = {
        title: Joi.string().min(5).max(255).required()
    };
    return Joi.validate(Category, schema);
}

module.exports ={
    CatModel: mongoose.model('Category', Category),
    validate:validateCat
} 