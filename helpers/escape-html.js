const entityMap = {
	//'&amp;':'&' ,
	'&lt;':'<' ,
	'&gt;':'>' ,
	'&quot;':'"' ,
	'&#39;':"'" ,
	'&#x2F;':'/',
	'&nbsp;' : ' '
};

module.exports = (string) => {	
	let result = string.replace(/&amp;/g, '&');
	result = result.replace(/&#{0,1}\w{1,};/g, function (s) {
		return entityMap[s];
	})
	return result;
};
