const http = require('node:http');

// runs on every incoming request -> event driven architecture of NodeJS
function reqListener(req, res) {
  console.log(req);
}

const server = http.createServer(reqListener);

server.listen('4000');
