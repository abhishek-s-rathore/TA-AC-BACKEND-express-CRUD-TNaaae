const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

mongoose.connect(
  'mongobd://localhost/school',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log(err ? err : 'Connected to database.');
  }
);

let app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use((req, res, next) => {
  res.locals = {
    users: {
      name: 'Abhishek',
    },
  };
});

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(3333, 'localhost', () => {
  console.log(`Server connected to port 3333!`);
});
