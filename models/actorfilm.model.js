const connection = require("../database/database");

module.exports={
  findAllActorFilm:function (callback) {
      connection.query("SELECT * FROM actorfilm");
  }
};