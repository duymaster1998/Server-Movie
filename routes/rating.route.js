const ratingController = require("../controllers/rating.controller");
const express = require("express");
const route = express.Router();

route.get("/:id",ratingController.getAllContentInStar);
route.get("/",ratingController.getAllRating);
route.post("/",ratingController.insertRating);

module.exports = route;