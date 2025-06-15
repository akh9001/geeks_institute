const knex = require('knex');
const config = require('../knexfile');
// Initialize knex with the configuration for the development environment

const db = knex(config.development);

module.exports = db;
