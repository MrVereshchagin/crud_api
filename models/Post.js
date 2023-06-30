const Sequelize = require('sequelize');
const postsdb = require('../config/database');

const post= postsdb.define('posts', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    post: {
        type: Sequelize.STRING,
        allowNull: false
    }

});

module.exports = post;