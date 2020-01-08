const express = require("express");
const route = express.Router();
const userController = require("../controllers/user.controller");

route.get("/", userController.getAllUsers);

route.get("/:id", userController.getOneUserByUserId);

route.post("/register", userController.getRegisterUser);

route.post("/user", userController.loadUserByGmailAndPassword);

module.exports = route;