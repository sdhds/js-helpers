import uuidv1 from 'uuid/v1';
import uuidv5 from 'uuid/v5';

export default (data) => {
	if (!data || typeof data === 'function') {
		throw new Error('Not valid data for ID'); // throw error and return
	}
	const epoch = Date.now();
	const postData = (typeof data === 'object') ? JSON.stringify(data) : data;
	return uuidv5(postData + epoch, uuidv1());
};
