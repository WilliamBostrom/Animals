const express = require("express");
const Movie = require("../db/models/movies");

const router = express.Router();

router.get("/100", async (req, res) => {
  try {
    const topMovies = await Movie.find().sort({ "imdb.rating": -1 }).limit(100);
    console.log("Top Movies: ", topMovies);
    res.json(topMovies);
  } catch (err) {
    res.status(500).json({ message: "Fel vid hämtning", err });
  }
});

router.get("/genre/:genre", async (req, res) => {
  try {
    const { genre } = req.params;
    const topMoviesByGenre = await Movie.find({ genres: genre })
      .sort({ "imdb.rating": -1 })
      .limit(50);
    res.json(topMoviesByGenre);
  } catch (err) {
    res.status(500).json({ message: "Fel vid hämtning", err });
  }
});

router.get("/year/:year", async (req, res) => {
  try {
    const { year } = req.params;
    const topMoviesByYear = await Movie.find({ year: Number(year) })
      .sort({ "imdb.rating": -1 }) //
      .limit(25);
    res.json(topMoviesByYear);
  } catch (err) {
    res.status(500).json({ message: "Fel vid hämtning", err });
  }
});

module.exports = router;
