require('dotenv').config()
// var keys = require("./keys.js")
// var spotify = new spotify(keys.spotify);
let moment = require('moment')

let axios = require("axios");

// let artist = "dispatch";

let liriAsk = process.argv[2];

let liriSearch = process.argv.slice(3).join(" ")

function search(){
    console.log(liriAsk)
    // if (liriAsk[2] === 'concert-this'){
    //     console.log("concert")
    switch(liriAsk){
        case "concert-this": 
            concerts();
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

        res.data.forEach(venue => {
            console.log(venue.venue.name)
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
    
    // concerts()
    search()
    // console.log(liriSearch)