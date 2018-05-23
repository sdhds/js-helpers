const typeMediaReg = require('./type-media-reg');
const supportedTypes = ['youtube', 'vimeo'];

module.exports = (str) => {
	console.log(typeMediaReg);
	const typeMedia = typeMediaReg.filter(type => (supportedTypes.find(type.provider) > -1));
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