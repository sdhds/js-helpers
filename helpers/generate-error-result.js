const httpCodeErrors = require('./http-code-errors');

module.exports = (req, res, type, stackTrace) => {
	const error = httpCodeErrors(type, req.id);
	if (error.code != 404) {
		const logingError = error;
		if (stackTrace) {
			logingError.stackTrace = (typeof stackTrace === 'object') ? JSON.stringify(stackTrace) : stackTrace;
		}
		console.error(logingError);
	}
	return res.status(error.code).json(error);
}