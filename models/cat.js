const Sequelize = require('sequelize');
const db = require('../config/database');

const Cat = db.define('cat', {
    title: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    cuteness: {
        type: Sequelize.STRING
    }
});

module.exports = Cat;