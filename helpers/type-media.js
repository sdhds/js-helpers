import { typeMediaReg } from 'helpers';

module.exports = (str) => {
	typeMediaReg.map(type => {
		if (type.type === 'video/youtube') {
			const result = url.match(type.reg);
			if (result != null) {
				return {type: type.type, id: result[result.length - 1]};
			}
		}
		if (type.type === 'video/vimeo') {
			const result = url.match(type.reg);
			if (result != null) {
				return {type: type.type, id: result[result.length - 1]};
			}
		}
		return false;
	});
};