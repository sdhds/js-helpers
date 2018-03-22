module.exports = (data, whatToKeep) => {
	if (Array.isArray(whatToKeep) || whatToKeep.length) {
		Object.keys(data).forEach((key) => {
            if (whatToKeep.indexOf(key) === -1) {
                delete data[key];
            }
		});
	}
	return data;
};