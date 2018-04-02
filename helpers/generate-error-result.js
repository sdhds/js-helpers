const httpCodeErrors = require('./http-code-errors');
const generateReqId = require('./generate-req-id');
const regexUUIDv4Custom = require('./regex').UUIDv4Custom;
const serverName = require('minimist')(process.argv.slice(2))['MY_POD_NAME'];

module.exports = (req, res, type, stackTrace) => {
	let id = req.headers['x-request-id'];

	// passed only on our custom UUIDv4 generation
	if (!regexUUIDv4Custom.test(id)) {
		id = generateReqId();
		if (req.method != 'GET')
			console.error({
					type: 'InteractionError',
					message: 'X-Request-ID is not defined in request',
					id,
					serverName,
					method: req.method,
					originalUrl: req.originalUrl,
					ip: req.ip,
				}
			)
	}
	const error = httpCodeErrors(type, id, serverName);
	if (error.code != 404) {
		const logingError = error;
		if (stackTrace) {
			logingError.stackTrace = (typeof stackTrace === 'object') ? JSON.stringify(stackTrace) : stackTrace;
		}
		console.error(logingError);
	}
	return res.status(error.code).json(error);
}