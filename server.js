// this is the main entry point of the app
const express = require('express');
const app = express();
const routes = require('./routes');
app.use('/', routes);
app.listen(3000, () => console.log('Server started on port 3000'));