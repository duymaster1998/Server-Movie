const movieController = require("../controllers/movie.controller");

const express = require("express");
const route = express.Router();

route.get("/alls",movieController.getAllMovies);
route.get("/alls/hd",movieController.getAllMoviesHD);
route.get("/alls/tc",movieController.getAllMoviesTC);
route.get("/alls/other",movieController.getAllMoviesOther);
route.get("/topmovies",movieController.getTopMovies);
route.get("/:id",movieController.getOneMovie);
route.get("/", movieController.filterMovieByName);

module.exports = route;