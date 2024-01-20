const pgp = require('pg-promise')();
const connectionString = 'postgres://postgres:Kadit@234@localhost:5432/postgres';
const db = pgp(connectionString);
module.exports = db;