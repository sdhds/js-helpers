const typeMediaReg = require('./type-media-reg');
const supportedTypes = ['youtube', 'vimeo'];

module.exports = (str) => {
	const typeMedia = typeMediaReg.filter(type => ( supportedTypes.indexOf(type.provider) > -1));
	let resultObj = null;
	typeMedia.map(type => {
		const result = str.match(type.reg);
		if (result != null) {
			resultObj = {type: type.provider, id: result[result.length - 1]};
		}		
	});
	if (resultObj != null) {
		return resultObj;
	} else {
		return false;
	}
};