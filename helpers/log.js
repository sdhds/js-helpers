const axios = require('axios');
const generateReqId = require('./generate-req-id');
const serverName = require('./get-server-name');

const sendToLogger = (data) => {
	data.server_id = process.env.MY_POD_NAME || '';
	return axios({
		method: 'post',
		headers: {
			'Content-Type': 'application/json',
			'x-request-id': generateReqId()
		},
		url: 'https://logs.kube-test.isina.com/logs',
		data
	}).then(() => {
		// temporary
		console.log('Log req send');
	}).catch((er) => {
		console.error(er);
	});
};

const debug = (message, data) => {
	data.message = message;
	data.log_level = 'DEBUG';
	return sendToLogger(data);
};

const info = (message, data) => {
	data.message = message;
	data.log_level = 'INFO';
	return sendToLogger(data);
};

const warn = (message, data) => {
	data.message = message;
	data.log_level = 'WARN';
	return sendToLogger(data);
};

const error = (message, data) => {
	data.message = message;
	data.log_level = 'ERROR';
	return sendToLogger(data);
};

const fatal = (message, data) => {
	data.message = message;
	data.log_level = 'FATAL';
	return sendToLogger(data);
};

module.exports = {
	debug,
	info,
	warn,
	error,
	fatal
};
