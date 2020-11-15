const Pool = require('pg').Pool;
const constants = require('../constant/constants');

const pool = new Pool({
  user: constants.db.DB_USER_NAME,
  host: constants.db.DB_HOST_NAME,
  database: constants.db.DB_DATABASE_NAME,
  password: constants.db.DB_USER_PASSWORD,
  port: constants.db.DB_HOST_PORT
});

pool.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = pool;