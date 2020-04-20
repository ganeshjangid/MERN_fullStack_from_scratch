const _ = require('lodash');

class RequestHandler {
	constructor(logger) {
		this.logger = logger;
	}

	responseOriginCros(res){
		// Website you wish to allow to connect
		res.header("Access-Control-Allow-Origin", "*");
		// Request methods you wish to allow
		res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
		// Request headers you wish to allow
		res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
		// Set to true if you need the website to include cookies in the requests sent
		// to the API (e.g. in case you use sessions)
		res.setHeader('Access-Control-Allow-Credentials', true);
	}

	throwIf(fn, status, errorType, errorMessage) {
		return result => (fn(result) ? this.throwError(status, errorType, errorMessage)() : result);
	}

	validateJoi(err, status, errorType, errorMessage) {
		if (err) { this.logger.warn(`error in validating request : ${errorMessage}`); }
		return !_.isNull(err) ? this.throwError(status, errorType, errorMessage)() : '';
	}

	throwError(status, errorType, errorMessage) {
		return (e) => {
			if (!e) e = new Error(errorMessage || 'Default Error');
			e.status = status;
			e.errorType = errorType;
			throw e;
		};
	}

	catchError(res, error) {
		if (!error) error = new Error('Default error');
		res.status(error.status || 500).json({ type: 'error', message: error.message || 'Unhandled error', error });
	}

	sendSuccess(res, message, status) {
	this.responseOriginCros(res);
		this.logger.info(`a request has been made and proccessed successfully at: ${new Date()}`);
		return (data, globalData) => {
			if (_.isUndefined(status)) {
				status = 200;
			}
			res.status(status).json({
				type: 'success', message: message || 'Success result', data, ...globalData,
			});
		};
	}

	sendError(req, res, error) {
		this.responseOriginCros(res);
		this.logger.error(`error ,Error during processing request: ${`${req.protocol}://${req.get('host')}${req.originalUrl}`} details message: ${error.message}`);
		return res.status(error.status || 500).json({
			type: 'error', message: error.message || error.message || 'Unhandled Error', error,
		});
	}
}
module.exports = RequestHandler;
