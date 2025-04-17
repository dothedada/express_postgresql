const { Pool } = require('pg');

let newPool;

if (process.env.DB_CREDENTIALS === 'NOT_URI') {
    newPool = new Pool({
        connectionString:
            'postgresql://<role_name>:<role_password>@localhost:5432/top_users',
    });
} else {
    if (process.env.MODE === 'DEV') {
        require('dotenv').config();
    }
    newPool = new Pool({
        host: process.env.HOST,
        user: process.env.USER,
        database: process.env.DATABASE,
        password: String(process.env.PASSWORD),
        port: process.env.DB_PORT,
    });
}

module.exports = { newPool };
