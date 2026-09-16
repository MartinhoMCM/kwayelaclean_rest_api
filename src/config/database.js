const { Pool } = require("pg");
require("dotenv").config();

// const pool = new Pool({
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     database: process.env.DB_NAME,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD
// });

const {PGHOST, PGDATABASE,PGUSER,PGPASSWORD} = process.env;

const pool = new Pool({
  host: PGHOST,
  database: PGDATABASE,
  user: PGUSER,
  password:PGPASSWORD,
  port: 5432,
  ssl:{
    require: true
  }
});

module.exports = pool;