module.exports = (data, whatToRemove) => {
	if (Array.isArray(whatToRemove) || whatToRemove.length) {
		whatToRemove.forEach((key) => {
			delete data[key];
		});
	}
	return data;
};