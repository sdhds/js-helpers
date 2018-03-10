const httpCodeErrors = require('./http-code-errors');
const generateReqId = require('./generate-req-id');

module.exports = (req, res, type, stackTrace) => {
	let id = req.headers['x-request-id'];
	const regex = /\b[A-Z0-9]{32}$/g;
	if (!id || id.length != 32 || !regex.test(id)) {
		id = generateReqId();
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