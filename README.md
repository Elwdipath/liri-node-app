# liri-node-app

<!-- Put installation instruction to get this to work(i.e env file setup) -->

### Prerequisites
1. Node.js is required to run this application
2. Clone github repo to your local machine
3. Run "npm i" from app directory to install dependencies
4. Create a file named .env in app directory and place Spotify ID and Key in the following format:
    ```js
    # Spotify API key
    SPOTIFY_ID=your-spotify-id
    SPOTIFY_SECRET=your-spotify-secret
   ```
5. Create a JS file named `keys.js`.
    * Insert the following into keys.js
    ```js
    console.log('this is loaded');

    exports.spotify = {
        id: process.env.SPOTIFY_ID,
        secret: process.env.SPOTIFY_SECRET
    };
    ```

### App run down
* Liri allows you to search for your favorite artists upcoming concerts, get information about that song your heard, or search the OMDB movie database to obtain information about that movie you just saw. 

### App Instructions

1. App syntax
    * Concert This
        * node liri.js concert-this <artist/band>
    * Spotify this song
        * node liri.js spotify-this-song <songName>
    * Movie-this
        * node liri.js movie-this <movieName>
    * Do what it says (read from input from random.txt file)
        * node liri.js do-what-it-says

### Technologies used

* Axios- Used for api calls for OMDB and Bands in Town API's
* Node-Spotify-API- Used to call Spotify api to get artist and song information
* Dotenv- zero-dependency module used to load environment variables into process.env. 
