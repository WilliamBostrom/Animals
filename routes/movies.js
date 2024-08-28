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

module.exports = router;
