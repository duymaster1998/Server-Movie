const connection = require("../database/database");

module.exports={
    findAllActor:function (callback) {
        connection.query("SELECT * FROM actor",callback);
    },
    findOneActor:function (id,callback) {
        connection.query("SELECT * FROM actor WHERE actor.actorid = ?",[id],callback);
    }
};