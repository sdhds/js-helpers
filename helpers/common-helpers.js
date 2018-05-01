/* 	promisified timeout function */
const timeout = (ms) => new Promise(resolve => setTimeout(resolve, ms));

/* 	clean posts from api by last id, return only new records */
const cleanData = (arr, last_id) => {
	let sortedArray = arr.sort((a, b) => a.created_at > b.created_at);
	let resultArray = [];
	for (let post in sortedArray) {
		if (sortedArray[post].id == last_id) {
			break;
		}
		resultArray.push(sortedArray[post]);
	}
	return resultArray;
};

/* 	remove dublicates from object (by prop) or array (if prop = null it is array) */
const removeDuplicates = (arr, prop) => {
	let obj = {};
	let i;
	let len;
	if (prop) {
		for (i = 0, len = arr.length; i < len; i++) {
			if (!obj[arr[i][prop]]) obj[arr[i][prop]] = arr[i];
		}
	} else {
		for (i = 0, len = arr.length; i < len; i++) {
			if (!obj[arr[i]]) obj[arr[i]] = arr[i];
		}
	}
	let newArr = [];
	for (let key in obj) newArr.push(obj[key]);
	return newArr;
};

/* 	parse command line arguments */
const parseArgs = () => require('minimist')(process.argv.slice(2));

/* helper for filter empty strings */
const checkEmptyStringField = (field) => {
	if (typeof field != 'string') {
		return field;
	}
	let trimedField = field.trim();
	return trimedField.length ? trimedField : null;
};

/* 	remove empty props from object to prevent saving it to db */
const pickEmpty = (obj) => {
	for (let propName in obj) {
		if (obj[propName] === null
			|| obj[propName] === undefined
			|| checkEmptyStringField(obj[propName]) === null) {
			delete obj[propName];
		}
	}
	return obj;
};

module.exports = {
	cleanData,
	timeout,
	removeDuplicates,
	parseArgs,
	checkEmptyStringField,
	pickEmpty
};