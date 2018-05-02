module.exports = (arr, prop) => {
	let obj = {};
	let i;
	let len;
	if (prop) {
		for (i = 0, len = arr.length; i < len; i++) {
			if (!obj[arr[i][prop]]) obj[arr[i][prop]] = arr[i];
		}
	} else {
		for (i = 0, len = arr.length; i < len; i++) {
			if (!obj[arr[i]]) obj[arr[i]] = arr[i];
		}
	}
	let newArr = [];
	for (let key in obj) newArr.push(obj[key]);
	return newArr;
};