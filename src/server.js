const express = require('express');

const cors = require('cors');

const morgan = require('morgan');

const routes = require('./routes');

const path = require('path');

const server = express();


//SETTINGS
server.set('PORT', 4500)

//MIDDLEWARES
server.use(express.urlencoded({ extended: false }));
server.use(express.json());
server.use(cors());
server.use(morgan('dev'));

//ROUTES
server.use('/message', routes.message);
server.use('/user', routes.user)

//STATIC FOLDER
server.use(express.static(path.join(__dirname, 'public')))

module.exports = server;