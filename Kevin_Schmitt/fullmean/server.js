// const express = require('express');
// const bodyParser = require('body-parser');
// const session = require('express-session');
// const mongoose = require('mongoose')
// const port = 8000;
// const app = express();

// // set up middleware

// // app.set('view engine', 'ejs');
// // app.set('views', __dirname + '/client/views');

// app.use(express.static(__dirname + '/public/dist'));
// app.use(bodyParser.json());
// app.use(session({
//     secret: 'doesntmatterwhatyoutypehere',
//     resave: false,
//     saveUninitialized: true,
// }))

// // mongoose
// require('./server/config/mongoose');

// // routes
// require('./server/config/routes')(app);

// app.listen(port, () => console.log(`...listening on port ${port}...`));



const express = require("express");
const session = require('express-session');
const bodyParser = require('body-parser');
const port = 8000;
const app = express();

//middleware
app.use(bodyParser.json())
// app.use(bodyParser.urlencoded())
app.use(express.static(__dirname + '/public/dist'))
//mongoose file
require('./server/config/mongoose');
//routes
require('./server/config/routes')(app);

app.listen(port, () => console.log(`listening on port ${port}...`));