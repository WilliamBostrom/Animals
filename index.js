const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const app = express();

const movieRouter = require("./routes/movies");
const animalRouter = require("./routes/animals");

const DB = process.env.DATABASE.replace(
  "<db_password>",
  process.env.PASSWORD_DB
);

mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection successful");
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });

app.use(express.json());

// Definiera rutter
app.use("/movies", movieRouter);
app.use("/animals", animalRouter);

// Grundläggande ruta för testning
app.get("/", (request, response) => {
  response.send("Hello World!");
});

// Starta servern
const port = 4000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
