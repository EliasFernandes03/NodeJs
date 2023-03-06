
const mysql = require('mysql2/promise');

const USER_NAME = 'root';
const USER_PASS = '1234';
const DB_NAME = 'db_points';
const DB_HOST = 'localhost';

async function connect() {
    const con = await mysql.createConnection({
         user: USER_NAME,
         password: USER_PASS,
         host: DB_HOST,
         database: DB_NAME
    });

    return con;
}

async function execute(sql) {
    const connection = await connect();

    const [rows, fields] = await connection.execute(sql);

    return rows;
}

module.exports = {
    execute
};