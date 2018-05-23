const typeMediaReg = require('./type-media-reg');
const supportedTypes = ['youtube', 'vimeo'];

const cont  = (array, element) => {
	var index = 0;
	while (index < array.length) {
		if (element === array[index]) {
			return true;
		}
	}
	return false;
}

module.exports = (str) => {
	const typeMedia = typeMediaReg.filter(type => ( cont(supportedTypes, type.provider)));
	console.log(typeMedia);
	let result1 = null;
	typeMedia.map(type => {
		const result = str.match(type.reg);
		if (result != null) {
			result1 = {type: type.type, id: result[result.length - 1]};
		}		
	});
	if (result1 != null) {
		return result1;
	} else {
		return false;
	}
};