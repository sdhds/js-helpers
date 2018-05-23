const typeMediaReg = require('./type-media-reg');
const supportedTypes = ['youtube', 'vimeo'];

module.exports = (str) => {
	let resultObj = false;
	typeMediaReg.filter(type => ( supportedTypes.indexOf(type.provider) > -1))
		.some(type => {
			const result = str.match(type.reg);
			if (result != null) {
				resultObj = {provider: type.provider, id: result[result.length - 1]};
				return true;
			}		
		});
	return resultObj;	
};