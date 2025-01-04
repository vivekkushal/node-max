const express = require('express');

// router is like a mini express app and is pluggable in to the other express app
const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.send(
    '<form action="/admin/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
  );
});

// /admin/add-product => POST
router.post('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
