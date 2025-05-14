const MongoUser = require('../models/mongoUser');

exports.getUsers = async (req, res) => {
    const users = await MongoUser.find().select('-password');
    res.json(users);
};
