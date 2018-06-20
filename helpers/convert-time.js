const normaliseValue1 = (value) => {
	if (value < 10) {
		value = '0' + value;
	}
	return value;
};

module.exports = (sec, format) => {
	
	let hours = normaliseValue1(Math.round(sec / 3600));
	let minutes = normaliseValue1(Math.round((sec % 3600) / 60));
	let seconds = normaliseValue1(Math.round(sec % 60));

	return format
	.replace(/hh/g, hours)
	.replace(/min/g, minutes)
	.replace(/ss/g, seconds)
};