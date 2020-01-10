const connection = require("../database/database");

module.exports ={
    findAllMovies:function (callback) {
        connection.query("SELECT * FROM movie",callback);
    },
    findAllMoviesHD:function (callback) {
        connection.query("SELECT * FROM movie WHERE movie.category = 'hanhdong'",callback);
    },
    findAllMoviesTC:function (callback) {
        connection.query("SELECT * FROM movie WHERE movie.category = 'tinhcam'",callback);
    },
    findAllMoviesOther:function (callback) {
        connection.query("SELECT * FROM movie WHERE movie.category NOT IN ('hanhdong','tinhcam')",callback);
    },
    findOneMovie:function (id,callback) {
        connection.query("SELECT * FROM movie WHERE movie.movieid=?",[id],callback);
    },
    findTopMoviesNews:function (callback) {
        connection.query("SELECT * FROM movie ORDER BY movie.movieid DESC LIMIT 4",callback)
    }
};