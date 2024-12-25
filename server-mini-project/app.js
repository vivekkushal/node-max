const http = require('node:http');

// runs on every incoming request -> event driven architecture of NodeJS
function reqListener(req, res) {
  console.log(req.url, req.method, req.headers);
  // process.exit(1);
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title></head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();
}

const server = http.createServer(reqListener);

server.listen('4000');
