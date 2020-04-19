require('./Database');

const Category=new Schema({
    title:{type:String,require:true,trim:true,index:true}
},{
    timestamps: { createdAt: true, updatedAt: false }
});

module.exports = mongoose.model('Category', Category);