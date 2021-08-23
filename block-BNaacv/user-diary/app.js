// Accessing the Packages
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
var userRoutes = require('./routes/user');

// Connecting to MongoDB
mongoose.connect(
  'mongodb://localhost/user-diary',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error) => {
    console.log(error ? error : 'Connected to Database');
  }
);

// Initilizing the server
let app = express();

// Handling the Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(__dirname + '/assets'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Handling routing middlewares
app.get('/', (req, res) => {
  res.render('index');
});

app.use('/users', userRoutes);

// Handling error middlewares
app.use((req, res) => {
  res.status(404).send('Page Not Found');
});

app.use((error, req, res, next) => {
  res.send(error);
});

// Assigning port to server
app.listen(5555, 'localhost', () => {
  console.log(`Server listning to post 5555!`);
});
