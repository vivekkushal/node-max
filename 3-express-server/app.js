const http = require('node:http');

const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('In the middleware!');
  next();
});

app.use((req, res, next) => {
  console.log('In another middleware!');
});

// the inside function runs on every incoming request -> event driven architecture of NodeJS
const server = http.createServer(app);

server.listen(3000);
