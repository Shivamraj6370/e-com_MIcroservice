'use strict';
require('@babel/register');
require('@babel/polyfill');

const app = require('../app').default;
var config = require('../config/config');
const http = require('http');
var configvalue = config.get(process.env.NODE_ENV);
var port = configvalue.PORTNO;
//Create Server------------------------------
const server = http.createServer(app);
//Listening Port------------------------------
server.listen(port);
server.on('listening', () => {
  console.log(`apiGatway Listening on ${port}`);
});

