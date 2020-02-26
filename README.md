# liri-node-app

<!-- Put installation instruction to get this to work(i.e env file setup) -->

### Prerequisites
1. Node.js is required to run this application
2. Run "npm i" from app directory to install dependencies
3. Create a file named .env in app directory and place Spotify ID and Key in the following format:
    ```js
    # Spotify API key
    SPOTIFY_ID=your-spotify-id
    SPOTIFY_SECRET=your-spotify-secret
   ```
4. Create a JS file named `keys.js`.
    * Insert the following into keys.js
    ```js
    console.log('this is loaded');

    exports.spotify = {
        id: process.env.SPOTIFY_ID,
        secret: process.env.SPOTIFY_SECRET
    };
    ```

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