const regex = require('./regex');
const arrayHasDuplicates = require('array-has-duplicates');
const idsIsValid = (ids) => {
	for (let i = 0; i < ids.length; i++) {
		if (!regex.UUIDv5.test(ids[i])) {
			return false;
		}
	}
	return true;
};

module.exports = (arrayOfIds) => {
	if (arrayOfIds
		&& Array.isArray(arrayOfIds)
		&& arrayOfIds.filter(el => el || typeof el !== 'string' || el.length != 0)
		&& !arrayHasDuplicates(arrayOfIds)
		&& idsIsValid(arrayOfIds)
	) {
		return true;
	}
	return false;
}