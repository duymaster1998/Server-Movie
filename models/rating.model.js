const Connection = require("../database/database");

module.exports={
    findAllRating:function (id,callback) {
        Connection.query("SELECT rating.content,rating.star,usermovie.username FROM rating" +
            " inner join usermovie on rating.userid=usermovie.userid" +
            " where rating.movieid=?",[id],callback);
    },
    countRating:function (value,callback) {
        Connection.query("SELECT COUNT(*) FROM rating where rating.movieid = ?",[value],callback);
    },
    saveRating:function (values,callback) {
        Connection.query("INSERT INTO rating(userid,movieid,content,star) values(?,?,?,?)",
            [values.userid,values.movieid,values.content,values.star],callback);
    }
};