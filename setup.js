const express = require('express');
const routes = require('./routes');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use('/', routes);

app.listen(3000, () => console.log('Server started on port 3000'));