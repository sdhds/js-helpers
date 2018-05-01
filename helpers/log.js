const axios = require('axios');
const util = require('util')
const generateReqId = require('./generate-req-id');
const serverName = require('./get-server-name');
const commonHelpers = require('./common-helpers');
const now = require('./timer');

const CONSOLE_FONT_COLOR_RED = `\x1b[31m`;
const CONSOLE_FONT_COLOR_YELLOW = `\x1b[33m`;
const CONSOLE_FONT_COLOR_DEBUG = `\x1b[34m`;
const CONSOLE_RESET = `\x1b[0m`;
const utilInspectOptions = {
	showHidden: false,
	depth: null,
	maxArrayLength: null
}
const start = now.getTime();
const timing = process.env.NODE_ENV === 'dev'; // set to false if you don't want see timing in log

const logToConsole = (data, log_level) => {
	let time = '';

	if (timing) {
		time = Math.round((now.getTime() - start) / 1000) + 'sec:';
	}

	switch (log_level) {
		case 'DEBUG':
			{
				console.log(CONSOLE_FONT_COLOR_YELLOW, time, CONSOLE_FONT_COLOR_DEBUG, data, CONSOLE_RESET);
				break;
			}
		case 'INFO':
		case 'WARN':
			{
				console.log(CONSOLE_FONT_COLOR_YELLOW, time, data, CONSOLE_RESET);
				break;
			}
		case 'ERROR':
		case 'FATAL':
			{
				console.log(CONSOLE_FONT_COLOR_YELLOW, time, CONSOLE_FONT_COLOR_RED, data, CONSOLE_RESET);
				break;
			}
		default:
			{
				console.log(CONSOLE_FONT_COLOR_YELLOW, time, CONSOLE_RESET, data);
				break;
			}
	}
}

const sendToLogger = (data, log_level) => {
	data = commonHelpers.pickEmpty(data);
	data.server_id = serverName;
	if (process.env.NODE_ENV != 'production') {
		data = util.inspect(data, utilInspectOptions); // deeply extract large complicated objects
		return logToConsole(data, log_level);
	}
	return axios({
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
				'x-request-id': generateReqId()
			},
			url: 'https://logs.kube-test.isina.com/logs',
			data
		})
		.catch((er) => {
			console.error(CONSOLE_RESET, 'LOG server not responding, status:', er.response.status);
			logToConsole(data);
		});
};

const debug = (message, data) => {
	if (typeof (data) === 'undefined') data = {};
	data.message = message;
	data.log_level = 'DEBUG';
	return sendToLogger(data, data.log_level);
};

const info = (message, data) => {
	if (typeof (data) === 'undefined') data = {};
	data.message = message;
	data.log_level = 'INFO';
	return sendToLogger(data, data.log_level);
};

const warn = (message, data) => {
	if (typeof (data) === 'undefined') data = {};
	data.message = message;
	data.log_level = 'WARN';
	return sendToLogger(data, data.log_level);
};

const error = (message, data) => {
	if (typeof (data) === 'undefined') data = {};
	data.message = message;
	data.log_level = 'ERROR';
	return sendToLogger(data, data.log_level);
};

const fatal = (message, data) => {
	if (typeof (data) === 'undefined') data = {};
	data.message = message;
	data.log_level = 'FATAL';
	return sendToLogger(data, data.log_level);
};

module.exports = {
	debug,
	info,
	warn,
	error,
	fatal
};