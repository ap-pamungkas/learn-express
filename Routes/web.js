const express = require('express');
const UserController = require('../App/Controllers/UserController');
const PostController = require('../App/Controllers/PostController');
const Route = express.Router();

Route.get('/user', UserController.getUser.bind(UserController));
Route.post('/user', UserController.createUser.bind(UserController));

Route.get('/post', PostController.getAllPost.bind(PostController));

module.exports = Route;
