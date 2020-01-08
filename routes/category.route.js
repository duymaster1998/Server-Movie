const categoryController = require("../controllers/category.controller");

const express = require("express");
const route = express.Router();

route.get("/",categoryController.getAllCategory);
route.get("/:id",categoryController.getOneCategory);

module.exports =route;