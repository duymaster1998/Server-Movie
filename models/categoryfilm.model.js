const connection = require("../database/database");

module.exports={
    findAllCategoryFilm:function (callback) {
        connection.query("SELECT * FROM categoryfilm");
    }
};