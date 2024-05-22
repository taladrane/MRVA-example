// this is the file that contains the connection to the database
const { Pool } = require('pg');
const pool = new Pool({
    user: 'taladrane',
    host: 'localhost',
    database: 'user_db',
    password: 'password1234',
    port: 5432,
});
module.exports = pool;