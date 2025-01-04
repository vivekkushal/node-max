const express = require('express');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.use(express.urlencoded({ extended: true }));

// app.use('/', (req, res, next) => {
//   console.log('This always runs!');
//   next(); // Allows the request to continue to the next middleware in line
// });

// 'adminRoutes' & 'shopRoutes' are now a valid middleware function
app.use(adminRoutes);
app.use(shopRoutes);

app.listen(3000);
