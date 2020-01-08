const categoryfilmModel = require("../models/categoryfilm.model");

module.exports.getAllCategoryfilms = function (req,res) {
    categoryfilmModel.findAllCategoryFilm(function (err,rows) {
        if (err)
            res.json(err);
        else
            res.json(rows);
    });
};