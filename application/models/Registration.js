require('./Database');
const Joi = require('joi');

const Registration=new Schema({
    name:{type:String,require:true,trim:true,index:true},
    username:{type:String,require:true,unique: true,trim:true,index:true},
    password:{type:String,require:true,trim:true,index:true},
    status:Number
},{
    timestamps: { createdAt: true, updatedAt: false }
});

function validateUser(Registration) {
    const schema = {
        name: Joi.string().min(5).max(50).required(),
        username: Joi.string().min(5).max(255).required(),
        password: Joi.string().min(5).max(255).required()
    };
    return Joi.validate(Registration, schema);
}

module.exports ={
    RegModel: mongoose.model('Registration', Registration),
    validate:validateUser
} 