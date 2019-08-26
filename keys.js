   
console.log('this is loaded');
console.log()
console.log(process.env.SPOTIFY_ID)
console.log(process.env.SPOTIFY_SECRET)
var dotenv = require("dotenv").config();

exports.spotify = {
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET,
};