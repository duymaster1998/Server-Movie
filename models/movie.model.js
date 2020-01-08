const connection = require("../database/database");

module.exports ={
    findAllMovies:function (callback) {
        connection.query("SELECT * FROM movie",callback);
    },
    findOneMovie:function (id,callback) {
        connection.query("SELECT * FROM movie WHERE movie.movieid=?",[id],callback);
    }
};