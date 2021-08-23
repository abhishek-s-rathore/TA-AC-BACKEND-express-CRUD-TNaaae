const express = require('express');

var router = express.Router();

router.get('/new', (req, res) => {
  res.render('newUser');
});

router.post('/', (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

router.get('/', (req, res) => {
  res.render('singleUser');
});

module.exports = router;
