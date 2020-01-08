const connection = require('../database/database');

module.exports = {
    findAllUsers: function (callback) {
        return connection.query(
            "SELECT * FROM usermovie",
            callback
        );
    },
    findOneUserByUserId: function (id, callback) {
        return connection.query(
            "SELECT * FROM usermovie WHERE userid = ?",
            [id],
            callback
        );
    },
    loadUserByGmailAndPassword: function(params, callback) {
        return connection.query(
            "SELECT * FROM usermovie WHERE gmail = ? AND userpassword = ?",
            params,
            callback
        );
    },
    registerUser: function (params, callback) {
        connection.query(
            "INSERT INTO usermovie(username,gmail,userpassword)" +
            " VALUES(?,?,?)",
            params,
            callback
        );
    }
};