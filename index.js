const generateUniqId = require('./helpers/generate-uniq-id');
const generateReqId = require('./helpers/generate-req-id');
const httpCodeErrors = require('./helpers/http-code-errors');
const generateErrorResult = require('./helpers/generate-error-result');
const validateReqData = require('./helpers/validate-req-data');
const cleanResData = require('./helpers/clean-res-data');
const regex = require('./helpers/regex');

module.exports = {
	generateReqId, //use it to generate request id at frontend
	generateUniqId,
	httpCodeErrors,
	generateErrorResult,
	validateReqData,
	cleanResData,
	regex
}