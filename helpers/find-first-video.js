const YTVideoIdRegexp = /(youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/;
const VMVideIdRegexp = /(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/(?:[^/]*)\/videos\/|album\/(?:\d+)\/video\/|video\/|)(\d+)(?:[a-zA-Z0-9_-]+)?/i;
	
module.exports = (str) => {
	const resultYT = str.match( YTVideoIdRegexp );
	const resultVM = str.match( VMVideIdRegexp );
	const positionYT = resultYT == null ? -1 : str.search( YTVideoIdRegexp );
	const positionVM = resultVM == null ? -1 : str.search( VMVideIdRegexp );
	let result = positionYT == -1 ? '' : resultYT[0];
	result = (positionVM == -1 || positionYT < positionVM ) ? result : resultVM[0];	
	return result;
};