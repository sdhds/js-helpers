const httpCodeErrors = require('./http-code-errors');
const generateReqId = require('./generate-req-id');

module.exports = (req, res, type, stackTrace) => {
	let id = req.headers['x-request-id'];
	// passed only on our custom UUIDv4 generation
	const regex = /^[0-9A-F]{12}4[0-9A-F]{3}[89ab][0-9A-F]{15}$/;
	if (!regex.test(id)) {
		id = generateReqId();
		if (req.method != 'GET')
			console.error({
					type: 'InteractionError',
					message: 'X-Request-ID is not defined in request',
					id: id,
					method: req.method,
					originalUrl: req.originalUrl,
					ip: req.ip,
				}
			)
	}
	const error = httpCodeErrors(type, id);
	if (error.code != 404) {
		const logingError = error;
		if (stackTrace) {
			logingError.stackTrace = (typeof stackTrace === 'object') ? JSON.stringify(stackTrace) : stackTrace;
		}
		console.error(logingError);
	}
	return res.status(error.code).json(error);
}