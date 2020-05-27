const mysql = require("mysql2");
require("dotenv").config();

const pool = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  database: "node-project",
  password: process.env.SECRET_KEY,
});

module.exports = pool.promise();
