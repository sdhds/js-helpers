const log = require('./helpers/log');
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
const convertDate = require('./helpers/convert-date');
const dateWithoutMs = require('./helpers/date-without-ms');
const dateToSec = require('./helpers/date-to-sec');
const convertToEncodeURI = require('./helpers/convert-to-encode-uri');
const pickEmpty = require('./helpers/pick-empty');
const oldMaskId = require('./helpers/old-mask-id');
const removeDuplicates = require('./helpers/remove-duplicates');
const typeMediaReg = require('./helpers/type-media-reg');
const typeMedia = require('./helpers/type-media');
const imageLoader = require('./helpers/image-loader');

module.exports = {
	log,
	generateReqId, //use it to generate request id at frontend
	generateUniqId,
	httpCodeErrors,
	generateErrorResult,
	validateReqData,
	cleanResData,
	keepResData,
	isArrayOfIdsValid,
	regex,
	findFirstVideo,
	convertDate,
	dateWithoutMs,
	dateToSec,
	convertToEncodeURI,
	pickEmpty,
	oldMaskId,
	removeDuplicates,
	typeMediaReg,
	typeMedia,
    imageLoader
}
