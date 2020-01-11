const connection = require("../database/database");

module.exports={
  findAllActorFilm:function (id,callback) {
      connection.query("SELECT actor.actorid,actor.actorname,actor.actorimage,actor.infomation " +
          "FROM actorfilm INNER JOIN actor ON actor.actorid=actorfilm.actorid  " +
          "WHERE actorfilm.movieid=? ",[id],callback);
  }
};