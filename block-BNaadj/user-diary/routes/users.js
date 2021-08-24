const express = require('express');

const router = express.Router();

var User = require('../models/user');

router.get('/', (req, res) => {
  User.find({}, (err, users) => {
    if (err) return next(err);
    res.render('usersList', { users: users });
  });
});

router.get('/new', (req, res) => {
  res.render('addUser');
});

router.post('/', (req, res, next) => {
  let data = req.body;
  console.log(data);
  User.create(data, (err, ceatedUser) => {
    if (err) return next(err);
    res.redirect('/users');
  });
});

router.get('/:id', (req, res, next) => {
  let data = req.body;
  let id = req.params.id;
  User.findById(id, (err, user) => {
    if (err) return next(err);
    res.render('singleUser', { user: user });
  });
});

router.get('/:id/edit', (req, res, next) => {
  let id = req.params.id;
  User.findById(id, (err, user) => {
    if (err) return next(err);
    res.render('editUser', { user: user });
  });
});

router.post('/:id', (req, res, next) => {
  let data = req.body;
  let id = req.params.id;
  User.findByIdAndUpdate(id, data, (err, updatedUser) => {
    console.log(updatedUser);
    if (err) return next(err);
    res.redirect('/users/' + id);
  });
});

module.exports = router;
