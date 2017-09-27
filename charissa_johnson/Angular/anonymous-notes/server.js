const express = require('express');
const bodyParser = require('body-parser');
const port = 8000;

const app = express();

//middleware
app.use(express.static(__dirname + '/public/dist'));
app.use(bodyParser.json()); //instead of bodyParser.urlencoded

//mongoose file
require('./server/config/mongoose');

//routes
require('./server/config/routes')(app);

app.listen(port, () => console.log(`listening on port ${port}...`));