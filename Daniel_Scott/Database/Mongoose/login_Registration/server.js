const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const port = 8000;
const app = express();
// Middleware
app.set('view engine', 'ejs');
app.set('views', __dirname + '/client/views');

app.use(express.static(__dirname + '/client/static'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: 'Phoenix',
  resave: false,
	saveUninitialized: true
}))

//pull in mongoose
require('./server/config/mongoose');

//routes
require('./server/config/routes')(app);

// Tell the app to listen on port
app.listen(port, ()=>{
  console.log(`Server is locked and loaded on port: ${port}. . .`);
})
