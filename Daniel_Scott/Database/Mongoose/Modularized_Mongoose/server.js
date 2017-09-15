const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const port = 8000;
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, "./client/static")));
app.set('views', path.join(__dirname, "./client/views"));
app.set('view engine', 'ejs');
require('./server/config/mongoose.js');
var routes_setter = require('./server/config/routes.js');
routes_setter(app);
app.listen(port, ()=>{
  console.log("Server is locked and loaded on port: "+port)
});
