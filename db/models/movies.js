const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  year: Number,
  plot: String,
  fullplot: String,
  genres: [String], // Array av strängar
  runtime: Number,
  cast: [String], // Array av strängar
  poster: String,
  languages: [String], // Array av strängar
  released: Date,
  directors: [String], // Array av strängar
  rated: String,
  awards: {
    wins: Number,
    nominations: Number,
    text: String,
  },
  lastupdated: String, // Kan även användas som datum om du vill konvertera
  imdb: {
    rating: Number,
    votes: Number,
    id: Number,
  },
  countries: [String], // Array av strängar
  type: String,
  tomatoes: {
    viewer: {
      rating: Number,
      numReviews: Number,
      meter: Number,
    },
    critic: {
      rating: Number,
      numReviews: Number,
      meter: Number,
    },
    lastUpdated: Date,
  },
  num_mflix_comments: Number,
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
