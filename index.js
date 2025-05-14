require('dotenv').config();
const express = require('express');
const { connectMongo, sequelize } = require('./config/db');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger/swagger');

const app = express();
app.use(express.json());

// Baza danych
connectMongo().then(() => console.log('MongoDB OK'));
sequelize.authenticate().then(() => console.log('MySQL OK'));

// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routing
app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));

// Start
app.listen(process.env.PORT, () => console.log(`API działa na porcie ${process.env.PORT}`));
