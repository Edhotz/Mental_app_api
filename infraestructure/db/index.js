const { query } = require("express");
const { Pool } = require("pg");

const pool = new Pool({
  user: "edmauro",
  password: "docker",
  host: "localhost",
  port: 5432,
  database: "postgres",
});

module.exports = { query: (text, params) => pool.query(text, params) };
