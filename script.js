
const url = 'https://any-anime.p.rapidapi.com/v1/anime/png/10';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '25adbbda6dmsh56df7cfa3267e2ap18ca9bjsn811450623d3e',
		'X-RapidAPI-Host': 'any-anime.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
        var result2 = result.replace(result , '{"message":"Random Anime PNG Images","status":"200","images": ', '') ;
console.log(result2)
    let resultr = result;
    for (var n = 0 ; n < 9;n++ ){
     
       var   resultimg = result[n] ;
        if(resultimg.includes("cdn.discordapp") == true ){
            console.log("The image is empty😱😱 "+ resultimg)
        }
        else{
         var div = document.getElementById("images");
          var display = div + "<br>" + "<img id='imagess' src= "+resultimg+">" ;
          document.getElementById("images").innerHTML = display;
        }
    }
} catch (error) {
	console.error(error);
}

