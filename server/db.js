const Pool = require('pg').Pool;
require('dotenv').config();

const pool = new Pool({
    user: 'dzekovalex',
    password: '',
    host: 'locahost',
    port: 8080,
    database: 'todoapp'
});

module.exports = pool;