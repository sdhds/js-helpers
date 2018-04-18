module.exports = (data, whatToRemove) => {
	let mutableData = ({...data});
	if (Array.isArray(whatToRemove) || whatToRemove.length) {
		whatToRemove.forEach((key) => {
			delete mutableData[key];
		});
	}
	return mutableData;
};