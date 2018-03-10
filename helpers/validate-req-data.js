const arrayUnique = require('array-unique');

const checkSensetiveData = (data, disallowParams, allowParams) => {
	let definedDisallowParams = [
		'created_at',
		'createdAt',
		'updated_at',
		'updatedAt'
	];

	if (!Array.isArray(disallowParams) || !disallowParams.length) {
		definedDisallowParams = arrayUnique(definedDisallowParams.concat(disallowParams));
	}
	for (let i = 0; i < definedDisallowParams.length; i++) {
		if (data[definedDisallowParams[i]]) {
			return null;
		}
	}

	if (Array.isArray(allowParams) && allowParams.length) {
		const dataKeys = Object.keys(data);
		for (let i = 0; i < dataKeys.length; i++) {
			if (allowParams.indexOf(dataKeys[i]) === -1) {
				return null;
			}
		}
	}

	return true;
};

module.exports = (data, disallowParams, allowParams) => {
	if (Object.getOwnPropertyNames(data).length === 0) {
		return {
			isValid: false,
			type: 'EmptyBody'
		};
	}
	if (!checkSensetiveData(data, disallowParams, allowParams)) {
		return {
			isValid: false,
			type: 'BadParam'
		};
	}
	return {
		isValid: true
	};
};
