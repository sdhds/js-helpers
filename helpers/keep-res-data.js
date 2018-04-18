module.exports = (data, whatToKeep) => {
	let mutableData = ({...data});
	if (Array.isArray(whatToKeep) || whatToKeep.length) {
		Object.keys(mutableData).forEach((key) => {
            if (whatToKeep.indexOf(key) === -1) {
                delete mutableData[key];
            }
		});
	}
	return mutableData;
};