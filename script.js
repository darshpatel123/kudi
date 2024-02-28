const url = 'https://myanimelist.p.rapidapi.com/anime/52991';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '25adbbda6dmsh56df7cfa3267e2ap18ca9bjsn811450623d3e',
		'X-RapidAPI-Host': 'myanimelist.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}