const bcmul = require('locutus/php/bc/bcmul');

module.exports = (id) => {
	const length = 12;
	let tail = bcmul(5027284359, id);
	for (let i = 0; i < id % 5; i++) {
      tail = tail.substr(1) +  tail.substr(0, 1);
	}

	let masked = tail.substr(tail.length - 2, 1) + String(id).length + id + tail;
	masked = masked.substr(0, length);

	return masked;
}
