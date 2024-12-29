const http = require('http');

const homePage = `<html>
  <head>
    <title>Assignment-1</title>
  </head>
  <body>
    <h1>Welcome to my home page</h1>
    <form action="/create-user" method="POST">
      <input type="text" name="username">
      <button type="submit">Send</button>
    </form>
  </body>
</html>`;

const usersPage = `<html>
  <head>
    <title>Assignment-1</title>
  </head>
  <body>
    <h1>Welcome to my users page</h1>
    <ul>
      <li>User 1</li>
      <li>User 2</li>
    </ul>
  </body>
</html>`;

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write(homePage);
    return res.end();
  }
  if (url === '/users') {
    res.setHeader('Content-Type', 'text/html');
    res.write(usersPage);
    return res.end();
  }
  if (url === '/create-user' && method === 'POST') {
    const body = [];

    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      res.statusCode = 302;
      res.setHeader('Location', '/users');
      return res.end();
    });
  }
});

server.listen(3000);
