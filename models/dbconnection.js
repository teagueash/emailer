const mysql = require("mysql");
const config = require("../config/keys");

/*
 * connection pool handles dropped DB connections
 */
const pool = mysql.createPool({
  connectionLimit: 10,
  host: config.sqlHost,
  user: config.sqlUser,
  password: config.sqlPassword,
  database: config.sqlDatabase
});

pool.getConnection((err, connection) => {
  if (err) {
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      console.error("Database connection was closed.");
    }
    if (err.code === "ER_CON_COUNT_ERROR") {
      console.error("Database has too many connections.");
    }
    if (err.code === "ECONNREFUSED") {
      console.error("Database connection was refused.");
    }

    if (connection) connection.release();

    return;
  }
});

module.exports = pool;
