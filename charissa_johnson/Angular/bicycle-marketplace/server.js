const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const path = require('path');
const port = 8000;

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/public/dist')));
app.use(session({
	secret: "omgomgomgomg",
	resave: false,
	saveUninitialized: true
}));

//connect to mongoose file
require('./server/config/mongoose.js');

//connect to routes file
require('./server/config/routes')(app);

app.listen(port, () => console.log(`listening on port ${port}`));