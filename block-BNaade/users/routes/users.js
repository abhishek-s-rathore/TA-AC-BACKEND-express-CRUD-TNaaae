const express = require('express');
let router = express.Router();
var User = require('../models/user');

router.get('/', (req, res, next) => {
  User.find({}, (err, users) => {
    if (err) return next(err);
    res.render('userList', { users: users });
  });
});

router.get('/:id', (req, res, next) => {
  var id = req.params.id;
  User.findById(id, (err, user) => {
    if (err) return next(err);
    res.render('userDetails', { user: user });
  });
});

router.get('/new', (req, res) => {
  res.render('addUser');
});

router.post('/', (req, res, next) => {
  let data = req.body;
  console.log(data);
  User.create(data, (err, createdUser) => {
    if (err) return next(err);
    res.redirect('/users');
  });
});

router.get('/:id/edit', (req, res, next) => {
  var id = req.params.id;
  User.findById(id, (err, user) => {
    if (err) return next(err);
    res.render('editUser', { user: user });
  });
  // console.log('hit')
});

router.post('/:id', (req, res, next) => {
  let data = req.body;
  let id = req.params.id;
  User.findByIdAndUpdate(id, data, (err, updatedUser) => {
    if (err) return next(err);
    res.redirect('/users/' + id);
  });
});

module.exports = router;

// Completed
