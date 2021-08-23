const express = require('express');
// const mongoose = require('mongoose');

// mongoose.connect(
//   'mongobd://localhost/school',
//   { useNewUrlParser: true, useUnifiedTopology: true },
//   (err) => {
//     console.log(err ? err : 'Connected to database.');
//   }
// );

let app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use((req, res, next) => {
  res.locals.user = {
    name: 'Abhishek',
  };
  next();
});

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(3344, 'localhost', () => {
  console.log(`Server connected to port 3344!`);
});
