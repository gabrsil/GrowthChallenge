const { Router } = require('express');

const  UserController = require('./app/controllers/UserController');
const  PostController = require('./app/controllers/PostController');


const routes = Router();

routes.get('/', (request, response) => {
    return response.send('Hello World');
})

routes.get('/api/fetch/users', UserController.fetchUserApiAndSave);

routes.get('/api/fetch/posts', PostController.fetchPostApiAndSave);

module.exports = routes;