const express = require('express');

const app = express();

app.use('/users', (req, res, next) => {
  console.log('First middleware reached!');
  res.send('<h1>Welcome to Users page</h1>');
});

app.use('/', (req, res, next) => {
  console.log('Second middleware reached!');
  res.send('<h1>Welcome to Home page</h1>');
});

app.listen(3000);
