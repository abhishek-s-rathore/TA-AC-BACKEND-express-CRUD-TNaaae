var express = require('express');

var router = express.Router();

router.get('/new', (req, res) => {
  res.render('studentsForm');
});

router.post('/', (req, res) => {
  let data = req.body;
  res.send(`${data.name} Saved Successfully`);
});

router.get('/', (req, res) => {
  res.render('list', { list: ['ankit', 'suraj', 'prashant', 'ravi'] });
});

router.get('/:id', (req, res) => {
  let id = req.params.id;
  res.render('studentDetails', {
    student: { name: 'Rahul', email: 'rahul@altcampus.io' },
  });
});

module.exports = router;
