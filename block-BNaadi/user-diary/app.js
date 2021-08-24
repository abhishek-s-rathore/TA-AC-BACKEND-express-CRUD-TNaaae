// Requiring the packages
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

// Requiring the modules
let indexRouters = require('./routes/index');
let usersRouters = require('./routes/users');

// Connecting to Database
mongoose.connect(
  'mongodb://localhost/user-diary',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error) => {
    console.log(`Connected to database: `, error ? false : true);
  }
);

// Instantiating the Application
let app = express();

// Middlewares
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ exended: false }));
app.use(express.static(__dirname + `/assets`));

//  Handling Routing Middlewares
app.use('/', indexRouters);
app.use('/users', usersRouters);

// Error Handler Middlewares
app.use(`/`, (req, res) => {
  res.send('Page not found :(');
});

app.use(`/`, (err, req, res, next) => {
  res.send(err);
});

// Connecting to Server
app.listen(5000, 'localhost', () => {
  console.log(`Server connected to port 5000!`);
});
