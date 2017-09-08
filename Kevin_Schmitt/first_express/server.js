var express = require('express');
// let bodyParser = require('body-parser');
// let session = require('express-session');
var port = 8000;

var app = express();
// .set
// console.log('dirname =' , __dirname + '/views');
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// .use
app.use(express.static(__dirname + '/static'))

// routes
app.get('/', function(request, response) {
    response.render("index.ejs");
})
app.get('/nextPage', function(request, response) {
    response.render("nextpage.ejs");
})







// always goes at the bottom
// arrow function
// must use back ticks!!
app.listen(port, () => {console.log(`...listening on port ${port}...`)
})
    