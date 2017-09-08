var express = require('express');

var app = express();
// .set
// console.log('dirname =' , __dirname + '/views');
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('port', process.env.PORT || 8080);

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
app.listen(8080, function(){
    console.log("...listening on port 3000...")
})