const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'express-crud',
    password: 'Parija@123'
});

module.exports = pool.promise();