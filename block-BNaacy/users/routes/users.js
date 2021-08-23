const express = require('express');
let router = express.Router();

var Book = require('../models/user');

router.get('/', (req, res) => {
  res.render('userList');
});

router.get('/new', (req, res) => {
  res.render('addUser');
});

router.post('/', (req, res, next) => {
  let data = req.body;
  console.log(data);
  Book.create(data, (err, createdUser) => {
    if (err) return next(err);
    res.redirect('/users');
  });
});

module.exports = router;
