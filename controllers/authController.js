const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const MongoUser = require('../models/mongoUser');
const MySQLUser = require('../models/mysqlUser');
const { secret, expiresIn } = require('../config/jwt');

exports.register = async (req, res) => {
    const hashed = await bcrypt.hash(req.body.password, 10);
    await MongoUser.create({ username: req.body.username, password: hashed });
    await MySQLUser.create({ username: req.body.username, password: hashed });
    res.status(201).send('Użytkownik utworzony.');
};

exports.login = async (req, res) => {
    const user = await MongoUser.findOne({ username: req.body.username })
                || await MySQLUser.findOne({ where: { username: req.body.username } });

    if (!user || !await bcrypt.compare(req.body.password, user.password)) {
        return res.status(401).send('Nieprawidłowe dane logowania.');
    }

    const token = jwt.sign({ username: user.username }, secret, { expiresIn });
    res.json({ token });
};
