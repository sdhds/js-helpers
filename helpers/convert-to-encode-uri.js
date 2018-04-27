module.exports = (str) => {
	return encodeURIComponent(str).replace(/%20/g, '+') 
};