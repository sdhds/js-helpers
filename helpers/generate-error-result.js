const httpCodeErrors = require('./http-code-errors');
const generateReqId = require('./helpers/generate-req-id');

module.exports = (req, res, type, stackTrace) => {
	let id = req.headers['x-request-id'];
	if (!id) {
		id = generateReqId();
		console.error({
				type: 'InteractionError',
				message: 'X-Request-ID is not defined in request',
				id: id,
				info: `
			req.method: ${req.method},
			req.originalUrl: ${req.originalUrl},
			req.ip: ${req.ip},
			req.params: ${req.params},
			req.query: ${req.query}
			`
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