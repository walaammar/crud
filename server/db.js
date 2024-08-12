const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "7265",
  host: "localhost",
  port: 5432,
  database: "perntodo"
});

module.exports = pool;
