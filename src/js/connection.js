const mysql = require('mysql2');

const connectionUrl = 'mysql://root:root@localhost:3306/mydb';

module.exports =  mysql.createConnection({
    uri: connectionUrl
});

