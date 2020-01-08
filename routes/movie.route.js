const movieController = require("../controllers/movie.controller");

const express = require("express");
const route = express.Router();

route.get("/",movieController.getAllMovies);
route.get("/:id",movieController.getAllMovies);

module.exports = route;