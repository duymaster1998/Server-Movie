const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '421998',
    database: 'movie'
});

connection.connect(function (err) {
    if (err) throw err;
});

module.exports = connection;