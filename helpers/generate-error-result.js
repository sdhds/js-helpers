const httpCodeErrors = require('./http-code-errors');

module.exports = (res, type) => {
	const error = httpCodeErrors(type);
	return res.status(error.code).json(error);
}