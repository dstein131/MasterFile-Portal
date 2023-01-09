const Pool = require('pg').Pool

const pool = new Pool({
    user: 'davidstein',
    host: 'localhost',
    database: 'masterfile',
    password: '',
    port: 5432,
})









module.exports = pool