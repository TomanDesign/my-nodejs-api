const jwt = require('jsonwebtoken');
const { secret } = require('../config/jwt');

module.exports = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(401).send('Brak tokena.');

    try {
        req.user = jwt.verify(token, secret);
        next();
    } catch {
        res.status(403).send('Token nieprawidłowy.');
    }
};
