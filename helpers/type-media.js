const typeMediaReg = require('./type-media-reg');
const supportedTypes = ['youtube', 'vimeo'];

module.exports = (str) => {
	let resultObj = false;
	typeMediaReg.filter(({provider}) => ( supportedTypes.indexOf(provider) > -1))
		.some( ({reg, provider}) => {
			const result = str.match(reg);
			if (result != null) {
				resultObj = {provider: provider, id: result[result.length - 1]};
				return true;
			}		
		});
	return resultObj;	
};