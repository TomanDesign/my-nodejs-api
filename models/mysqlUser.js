const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const MySQLUser = sequelize.define('MySQLUser', {
    username: DataTypes.STRING,
    password: DataTypes.STRING
});

module.exports = MySQLUser;
