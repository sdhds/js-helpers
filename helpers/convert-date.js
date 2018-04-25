const Months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const normaliseValue = (value) => {
	if (value < 10) {
		value = '0' + value;
	}
	return value;
};

module.exports = (date, format) => {
	let _now = Date.now();
	if (typeof date === 'number') {
		if ((date < (_now / 600))) {
			date *= 1000;
		}
	}

	let _date = new Date(date);
	let year = _date.getFullYear();
	let month = normaliseValue(_date.getMonth() + 1);
	let monthName = Months[_date.getMonth() + 1];
	let weekDay = _date.getDay();
	let day = normaliseValue(_date.getDate());
	let hours = normaliseValue(_date.getHours());
	let minutes = normaliseValue(_date.getMinutes());
	let seconds = normaliseValue(_date.getSeconds());

	return format
	.replace(/yyyy/g, year)
	.replace(/mm/g, month)
	.replace(/month/g, monthName)
	.replace(/dd/g, day)
	.replace(/hh/g, hours)
	.replace(/min/g, minutes)
	.replace(/ss/g, seconds);
}