const checkEmptyStringField = require('./check-empty-string');

module.exports = (obj) => {
	for (let propName in obj) {
		if (obj[propName] === null
			|| obj[propName] === undefined
			|| checkEmptyStringField(obj[propName]) === null) {
			delete obj[propName];
		}
	}
	return obj;
};