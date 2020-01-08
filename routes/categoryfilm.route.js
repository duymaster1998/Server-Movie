const categoryfilmController = require("../controllers/categoryfilm.controller");

const express = require("express");
const route = express.Router();

route.get("/",categoryfilmController.getAllCategoryfilms);

module.exports = route;