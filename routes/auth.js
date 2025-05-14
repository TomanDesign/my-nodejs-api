const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validate = require('../middlewares/validateMiddleware');
const authController = require('../controllers/authController');

const schema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().min(5).required()
});

router.post('/register', validate(schema), authController.register);
router.post('/login', validate(schema), authController.login);

module.exports = router;
