const movieModel = require("../models/movie.model");

module.exports.getAllMovies=function (req,res) {
    movieModel.findAllMovies(function (err,rows) {
        if (err)
            res.json(err);
        else
            res.json(rows);
    });
};
module.exports.getAllMoviesHD=function (req,res) {
    movieModel.findAllMoviesHD(function (err,rows) {
        if (err)
            res.json(err);
        else
            res.json(rows);
    });
};
module.exports.getAllMoviesTC=function (req,res) {
    movieModel.findAllMoviesTC(function (err,rows) {
        if (err)
            res.json(err);
        else
            res.json(rows);
    });
};
module.exports.getAllMoviesOther=function (req,res) {
    movieModel.findAllMoviesOther(function (err,rows) {
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
module.exports.getTopMovies = function (req,res) {
    movieModel.findTopMoviesNews(function (err,rows) {
        if(err)
            res.json(err);
        else
            res.json(rows);
    })
}