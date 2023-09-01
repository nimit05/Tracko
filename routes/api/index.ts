const {Router} = require('express');
const route = Router();

const signUpRoute = require('./signup').route;

route.use('/signup', signUpRoute);

module.exports = {route};