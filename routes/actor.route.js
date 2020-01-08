const actorController = require("../controllers/actor.controller");
const express = require("express");
const route = express.Router();

route.get("/",actorController.getAllAcotr);
route.get("/:id",actorController.getOneActor);

module.exports =route;