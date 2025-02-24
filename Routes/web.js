const express = require('express');
const UserController = require('../App/Controllers/UserController');
const router = express.Router();

router.get('/user', UserController.getUser.bind(UserController));
router.post('/user', UserController.createUser.bind(UserController));

module.exports = router;
