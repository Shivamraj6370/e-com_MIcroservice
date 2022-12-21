'use strict'
require('@babel/polyfill');
require('@babel/register');
require('dotenv').config()
const port = require('../config/config').get(process.env.NODE_ENV).PORTNO
const app = require('../app').default
const server = require('http').createServer(app);
server.listen(port);
server.on('listening', () => {
    console.log('server is created on port no: ' + port);
})