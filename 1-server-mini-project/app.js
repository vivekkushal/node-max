const http = require('node:http');

const routes = require('./routes');

// the inside function runs on every incoming request -> event driven architecture of NodeJS
const server = http.createServer(routes);

server.listen('3000');
