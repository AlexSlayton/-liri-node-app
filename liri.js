// var spotify = require('spotify');
 
// spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
//     if ( err ) {
//         console.log('Error occurred: ' + err);
//         return;
//     }
 
//     // Do something with 'data' 
// });

var input = process.argv;

var action = input[2];

if (action === "my-tweets"){
	console.log("Tweets Working");
} 
else if (action === "spotify-this-song"){
	console.log("Spotify Working");
	var spotify = require('spotify');
	var songName = " ";

	for (var i=3; i<input.length; i++){

	songName = songName + " " + input[i];
}

	spotify.search({ type: 'track', query: songName }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
 
    // Do something with 'data' 
    for (var i=0; i<data.tracks.items.length; i++){
    	  console.log(data.tracks.items[i].name + " " + data.tracks.items[i].artists[0].name);
    }
  

});

}
else if (action === "movie-this"){
	console.log("Movie Working");
}
else if (action === "do-what-it-says"){
	console.log("Do IT");
}

