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

const logToConsole = (data) => {
	let time;

	if (timing) {
		time = `${((now.getTime() - start) / 1000).toFixed(2)} seconds`;
	}
	switch (data.log_level) {
		case 'DEBUG':
			if (time) {
				console.log(CONSOLE_FONT_COLOR_YELLOW, time);
			}
			console.log(CONSOLE_FONT_COLOR_DEBUG, data);
			break;
		case 'INFO':
			if (time) {
				console.log(CONSOLE_FONT_COLOR_YELLOW, time);
			}
			console.log(CONSOLE_FONT_COLOR_YELLOW, data);
			break;
		case 'WARN':
			if (time) {
				console.log(CONSOLE_FONT_COLOR_YELLOW, time);
			}
			console.log(CONSOLE_FONT_COLOR_YELLOW, data);
			break;
		case 'ERROR':
		case 'FATAL':
			if (time) {
				console.log(CONSOLE_FONT_COLOR_YELLOW, time);
			}
			console.log(CONSOLE_FONT_COLOR_RED, data);
			break;
		default:
			if (time) {
				console.log(CONSOLE_FONT_COLOR_YELLOW, time);
			}
			console.log(CONSOLE_RESET, data);
	}
}

const sendToLogger = (data) => {
	data = commonHelpers.pickEmpty(data);
	data.server_id = serverName;
	if (process.env.NODE_ENV != 'production') {
		data = util.inspect(data, utilInspectOptions); // deeply extract large complicated objects
		return logToConsole(data);
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
	return sendToLogger(data);
};

const info = (message, data) => {
	if (typeof (data) === 'undefined') data = {};
	data.message = message;
	data.log_level = 'INFO';
	return sendToLogger(data);
};

const warn = (message, data) => {
	if (typeof (data) === 'undefined') data = {};
	data.message = message;
	data.log_level = 'WARN';
	return sendToLogger(data);
};

const error = (message, data) => {
	if (typeof (data) === 'undefined') data = {};
	data.message = message;
	data.log_level = 'ERROR';
	return sendToLogger(data);
};

const fatal = (message, data) => {
	if (typeof (data) === 'undefined') data = {};
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