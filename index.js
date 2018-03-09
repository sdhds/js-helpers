const generateUniqId = require('./helpers/generate-uniq-id');
const generateReqId = require('./helpers/generate-req-id');
const httpCodeErrors = require('./helpers/http-code-errors');
const generateErrorResult = require('./helpers/generate-error-result');

module.exports = {
	generateReqId, //use it to generate request id at frontend
	generateUniqId,
	httpCodeErrors,
	generateErrorResult
}