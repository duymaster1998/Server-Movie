const actorfilmController = require("../controllers/actorfilm.controller");

const express = require("express");
const route = express.Router();

route.get("/",actorfilmController.getAllActorfilm);

module.exports = route;