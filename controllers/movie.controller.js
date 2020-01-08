const movieModel = require("../models/movie.model");

module.exports.getAllMovies=function (req,res) {
    movieModel.findAllMovies(function (err,rows) {
        if (err)
            res.json(err);
        else
            res.json(rows);
    });
};
module.exports.getOneMovie = function (req,res) {
    movieModel.findOneMovie(req.params.id,function (err,rows) {
        if(err)
            res.json(err);
        else
            res.json(rows);
    });
};