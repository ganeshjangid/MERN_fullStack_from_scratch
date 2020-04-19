const { MongoDB } =require('../config/config');
exports = mongoose=require('mongoose');

const DB_URL=MongoDB;

let mongoConnect = mongoose.connect(DB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    keepAlive: true,
    useCreateIndex: true,
    useFindAndModify: false
});

mongoConnect.then((client) => {
    //console.log(client);
    console.log("Connected with Mongodb");
}).catch((err) => {
    console.log(err);
    throw err;
});

exports = Schema = mongoose.Schema;