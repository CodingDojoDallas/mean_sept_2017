const express = require('express');
const path = require('path');
const app = express();
const PORT  = 8000;

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './public/dist')));
app.use(bodyParser.json());

require('./server/config/mongoose.js');

const routes_setter = require('./server/config/routes.js')
routes_setter(app);

app.listen(PORT, ()=>{
  console.log('listening on port' + PORT);
});