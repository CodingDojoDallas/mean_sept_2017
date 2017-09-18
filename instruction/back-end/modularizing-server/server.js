const express = require("express");
const bodyParser = require('body-parser');
const session = require('express-session');
const port = 8000;
const app = express();

//set up middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/client/static'));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/client/views');

//import the database file
require('./server/config/mongoose');

//import the routes file
require('./server/config/routes')(app);

app.listen(port, () => console.log(`listening on port ${port}...`));
