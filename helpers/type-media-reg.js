module.exports = [
	{
		reg: /(http[s]?:\/\/){0,1}(?:www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/,
		type: 'video/youtube'
	},
	{
		reg: /(http[s]?:\/\/){0,1}(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/(?:[^/]*)\/videos\/|album\/(?:\d+)\/video\/|video\/|)(\d+)(?:[a-zA-Z0-9_-]+)?/i,
		type: 'video/vimeo'
	},
	{
		reg: /(http[s]?:\/\/){0,1}(?:www\.)?([a-zA-Z0-9_-]+)(.mp4)/,
		type: 'video/mp4'
	},
	{
		reg: /(http[s]?:\/\/){0,1}(?:www\.)?([a-zA-Z0-9_-]+)(.mp3)/,
		type: 'audio/mp3'
	}
];