const url = 'https://unogsng.p.rapidapi.com/images?netflixid=81037848&offset=3&limit=2';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'dfb2d741eemsh121ae2bd46d9ccep1ffd0fjsn4ab6a7e65911',
		'X-RapidAPI-Host': 'unogsng.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}