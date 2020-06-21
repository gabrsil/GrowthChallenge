const knex = require('knex');
const configuration = require('../../knexfile');
require('dotenv').config();

const connection = knex(configuration.development);

module.exports = connection;