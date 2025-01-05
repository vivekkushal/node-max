const path = require('path');

const express = require('express');

const rootDir = require('./util/path');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(rootDir, 'public')));

// app.use('/', (req, res, next) => {
//   console.log('This always runs!');
//   next(); // Allows the request to continue to the next middleware in line
// });

// 'adminRoutes' & 'shopRoutes' are now a valid middleware function
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  // res.status(404).send('<h2>404 page not found 😕</h2>');
  // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
  res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
});

app.listen(3000);
