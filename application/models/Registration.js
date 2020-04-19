require('./Database');

const Registration=new Schema({
    name:{type:String,require:true,trim:true,index:true},
    username:{type:String,require:true,unique: true,trim:true,index:true},
    password:{type:String,require:true,trim:true,index:true},
    status:Number
},{
    timestamps: { createdAt: true, updatedAt: false }
});

module.exports = mongoose.model('Registration', Registration);