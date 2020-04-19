require('./Database');

const Products=new Schema({
    name:{type:String,require:true,trim:true,index:true},
    price:Number,
    image:{type:String},
    catID:{type:mongoose.Schema.Types.ObjectId,index:true,ref:'Category'}
},{
    timestamps: { createdAt: true, updatedAt: false }
});

module.exports = mongoose.model('Products', Products);