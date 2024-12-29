const http = require('node:http');

const routes = require('./routes');

console.log(routes.someText);
// the inside function runs on every incoming request -> event driven architecture of NodeJS
const server = http.createServer(routes.handler);

server.listen(3000);
