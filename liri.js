require('dotenv').config();
let keys = require("./keys.js");
let Spotify = require('node-spotify-api');
let spotifyS = new Spotify(keys.spotify);
let moment = require('moment');

let axios = require("axios");

// let artist = "dispatch";

let liriAsk = process.argv[2];

let liriSearch = process.argv.slice(3).join(" ")

function search(){
    // console.log(liriAsk)
    // if (liriAsk[2] === 'concert-this'){
    //     console.log("concert")
    switch(liriAsk){
        case "concert-this": 
            concerts();
            break;
        case "spotify-this-song":
            spotify();
            break;
        case "movie-this":
            movies();
            break;
        default:
            console.log("Does not compute");
    }
        
}

function concerts(){
    axios
    .get("https://rest.bandsintown.com/artists/" + liriSearch + "/events?app_id=codingbootcamp")
    .then(function(res){
        // console.log(moment(res.data[0].datetime).format("MMM DD HH:mm"))
        // console.log(res.data)
        res.data.forEach(venue => {
            console.log("-------------------------")
            console.log(venue.venue.name)
            console.log(venue.venue.city + venue.venue.region + venue.venue.country)
            console.log(moment(venue.datetime).format("MMM DD YYYY, hh:mm a"))
        })

    }).catch(function(error) {
        if (error.res) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.res.data);
          console.log(error.res.status);
          console.log(error.res.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an object that comes back with details pertaining to the error that occurred.
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
    }

    function spotify(){
      // console.log ("spotify is here")
      spotifyS.search({type: 'track', query: liriSearch, limit: 5}).then(function(res){
        // console.log(res.tracks.items)
        // var song = res.tracks.items
        
        res.tracks.items.forEach(songs => {
          console.log("==================");
          console.log("Artist: " + songs.artists[0].name);
          console.log("Song name: " + songs.name);
          console.log("Preview song link: " + songs.external_urls['spotify']);
          console.log("Album: " + songs.album.name);
          console.log("------------------");
        })
      }).catch(function(err){
        console.log(err)
      })
        
    }

    function movies(){

    }
    
    // concerts()
    search()
    // console.log(liriSearch)