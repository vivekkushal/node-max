const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

// router is like a mini express app and is pluggable in to the other express app
const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  // res.send(
  //   '<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
  // );
  // res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
