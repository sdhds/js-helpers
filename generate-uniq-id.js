const uuidv1 = require('uuid/v1');
const uuidv5 = require('uuid/v5');

module.exports = (data) => {
	if (!data || typeof data === 'function') {
		throw new Error('Not valid data for ID'); // throw error and return
	}
	const epoch = Date.now();
	const postData = (typeof data === 'object') ? JSON.stringify(data) : data;
	return uuidv5(postData + epoch, uuidv1());
};
