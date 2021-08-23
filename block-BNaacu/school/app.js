const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
let studentsRouter = require(`./routes/students`);

// Connecting to Database
mongoose.connect(
  'mongodb://localhost/school',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log(err ? err : `Connected to database`);
  }
);

// Initializing the Server
let app = express();

// Middlewares
app.use('view engine', 'ejs');
app.use('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: false }));

// Routes

app.get('/', (req, res) => {
  res.render(index.ejs);
});

app.use('/students', studentsRouter);

// Error Handler Middlewares
app.use('/', (req, res) => {
  res.status(404).send('Page Not Found!');
});

// Assigning Port to server
app.listen(4000, 'localhost', () => {
  `Server listning to port 4000!`;
});
