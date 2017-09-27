const express = require("express");
const bodyParser = require('body-parser');
const session = require('express-session');
const port = 8000;
const app = express();

//middleware-not necessary for Angular
// app.set('view engine', 'ejs');
// app.set('views', __dirname + '/client/views');

app.use(express.static(__dirname + '/public/dist'));
// Remember to specify json instead of urlencoded.
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
	secret: 'loginregisterandstuff',
	resave: false,
	saveUninitialized: true
}))

//mongoose
require('./server/config/mongoose');

//routes
require('./server/config/routes')(app);

app.listen(port, () => console.log(`listening on port ${port}...`) );
