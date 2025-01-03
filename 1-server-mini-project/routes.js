const fs = require('fs');

function requestHandler(req, res) {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Enter message</title></head>');
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    );
    res.write('</html>');
    return res.end();
  }
  if (url === '/message' && method === 'POST') {
    const body = [];
    // .on() is an event listener on the request object
    // the 'data' event will be fired whenever a new chunk is ready to be read
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const message = parsedBody.split('=')[1];
      fs.writeFile('message.txt', message, (err) => {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        // aliter
        // res.writeHead('302', {
        //   Location: '/',
        // });
        return res.end();
      });
    });
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title></head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();
}

module.exports = {
  handler: requestHandler,
  someText: 'Some hard coded text',
};

// aliter
// module.exports.handler = requestHandler;
// module.exports.someText = 'Some hard coded text';

// aliter - shortcut supported by NodeJS, not a JavaScript feature
// exports.handler = requestHandler;
// exports.someText = 'Some hard coded text';

// aliter
// module.exports = requestHandler; // if there is only one function to export
