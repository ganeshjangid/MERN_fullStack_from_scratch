require('dotenv').config();

module.exports={
    PORT:process.env.PORT,
    ENV:process.env.NODE_ENV,
    MongoDB:process.env.DATABASE_URL
};