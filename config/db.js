const mongoose = require('mongoose');
const { Sequelize } = require('sequelize');

const connectMongo = () => mongoose.connect(process.env.MONGO_URI);

const sequelize = new Sequelize(
    process.env.MYSQL_DB,
    process.env.MYSQL_USER,
    process.env.MYSQL_PASSWORD,
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

module.exports = { connectMongo, sequelize };
