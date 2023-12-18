const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'admin',
    password: 'root',
    database: 'meetme'
});

connection.connect((err) => {
    if(err) {
        console.error('Error connecting to MySQL: ', err);
        return;
    }
    console.log('Connected to MySQL!');
});

module.exports = connection;