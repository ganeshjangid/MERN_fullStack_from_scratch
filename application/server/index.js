const bodyParser=require('body-parser');
const Env=require('../config/config');
const Express=require('express');
const logger = require('../utils/logger.js').logger;
const OS = require('os');
const path=require('path');
var appDir = path.dirname(require.main.filename);
const uuid=require('uuid');

const PORT=Env.PORT;
const app=new Express();

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/static', Express.static(path.join(appDir,'../../', 'client/public')));

process.on('SIGINT', () => {
	logger.info('stopping the server');
	process.exit();
});

app.set('port', PORT);

// app.use((req, res, next) => {
// 	req.identifier = uuid();
// 	const logString = `a request has been made with the following uuid [${req.identifier}] ${req.url} ${req.headers['user-agent']} ${JSON.stringify(req.body)}`;
// 	logger.info(logString,);
// 	next();
// });

app.use((req, res, next) => {
    console.log(`${req.method} ${req.originalUrl} [STARTED]`)
    res.on('finish', () => {            
        console.log(`${req.method} ${req.originalUrl} [FINISHED]`)
    })
    res.on('close', () => {
        console.log(`${req.method} ${req.originalUrl} [CLOSED]`)
    })
    next();
})

app.use("/api",require('../routes'));

app.use((req, res, next) => {
	logger.error('the url you are trying to reach is not hosted on our server');
	const err = new Error('Not Found');
	err.status = 404;
	
	res.status(err.status).json({ type: 'error', message: 'the url you are trying to reach is not hosted on our server' });
	next(err);
});

module.exports = app;



