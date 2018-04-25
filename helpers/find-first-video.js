const YTVideoIdRegexp = /(http[s]?:\/\/){0,1}(?:www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/;
const VMVideIdRegexp = /(http[s]?:\/\/){0,1}(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/(?:[^/]*)\/videos\/|album\/(?:\d+)\/video\/|video\/|)(\d+)(?:[a-zA-Z0-9_-]+)?/i;
			
module.exports = (str) => {
	const resultYT = str.match( YTVideoIdRegexp );
	const resultVM = str.match( VMVideIdRegexp );
	const positionYT = resultYT == null ? -1 : str.search( YTVideoIdRegexp );
	const positionVM = resultVM == null ? -1 : str.search( VMVideIdRegexp );
	let result = positionYT == -1 ? '' : resultYT[0];
	result = (positionVM != -1 && (positionYT == -1 || positionYT > positionVM )) ? resultVM[0] : result;
	return result;
};