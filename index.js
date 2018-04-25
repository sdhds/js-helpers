const generateUniqId = require('./helpers/generate-uniq-id');
const generateReqId = require('./helpers/generate-req-id');
const httpCodeErrors = require('./helpers/http-code-errors');
const generateErrorResult = require('./helpers/generate-error-result');
const validateReqData = require('./helpers/validate-req-data');
const cleanResData = require('./helpers/clean-res-data');
const keepResData = require('./helpers/keep-res-data');
const isArrayOfIdsValid = require('./helpers/is-array-of-ids-valid');
const regex = require('./helpers/regex');
const findFirstVideo = require('./helpers/find-first-video')

module.exports = {
	generateReqId, //use it to generate request id at frontend
	generateUniqId,
	httpCodeErrors,
	generateErrorResult,
	validateReqData,
	cleanResData,
	keepResData,
	isArrayOfIdsValid,
	regex,
	findFirstVideo
}