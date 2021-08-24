const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

// Requiring Routers
let indexRouters = require('./routes/index');
let usersRouters = require('./routes/users');

// Connecting to MongoDB
mongoose.connect(
  'mongodb://localhost/users',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error) => {
    console.log(`Connected to database: `, error ? false : true);
  }
);

// Instantiating The App
var app = express();

// Middlewares
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/assets'));

//  Handling Routing Middlewares

app.use('/', indexRouters);
app.use('/users', usersRouters);

// Error Handling Middlewares
app.use((req, res) => {
  res.send('Page not found :(');
});

app.use((error, req, res, next) => {
  res.send(error);
});

// Connecting to Server
app.listen(5000, 'localhost', () => {
  console.log(`Server is listning to port 5000!`);
});
