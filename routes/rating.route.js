const ratingController = require("../controllers/rating.controller");
const express = require("express");
const route = express.Router();

route.get("/count/:value",ratingController.getCountRating);
route.get("/:id",ratingController.getAllRating);
route.post("/insert",ratingController.insertRating);

module.exports = route;