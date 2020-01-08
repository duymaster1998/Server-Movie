const Connection = require("../database/database");

module.exports={
    findAllRating:function (callback) {
        Connection.query("SELECT * FROM rating",callback);
    },
    findAllContentInStar:function (id,callback) {
        Connection.query("SELECT * FROM rating where rating.star = ?",[id],callback);
    },
    saveRating:function (values,callback) {
        Connection.query("INSERT INTO rating(userid,movieid,content,star) values(?,?,?,?)",
            [values.userid,values.movieid,values.content,values.star],callback);
    }
};