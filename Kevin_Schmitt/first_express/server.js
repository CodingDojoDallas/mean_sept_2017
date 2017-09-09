var express = require('express');
let bodyParser = require('body-parser');
// let session = require('express-session');
var port = 8000;

var app = express();
// .set
// console.log('dirname =' , __dirname + '/views');
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
let users = [
    { id: 1, name: 'Kevin'},
    { id: 2, name: 'Bob'},
    { id: 3, name: 'Tim'},
    { id: 4, name: 'Karen'},
]
// .use
app.use(express.static(__dirname + '/static'))
app.use(bodyParser.urlencoded({ extended: true }))

// routes
app.get('/', function(request, response) {
    
    response.render("index.ejs", { 'users': users });
})
app.get('/nextPage', function(request, response) {
    response.render("nextpage.ejs");
})
app.post('/users', function(request, response){
    console.log(request.body.name);
    let newId = users[users.length -1].id + 1
    let userObj = {
        id: newId,
        name: request.body.name
    }
    users.push(userObj);
    response.redirect('/')
})







// always goes at the bottom
// arrow function
// must use back ticks!!
app.listen(port, () => {console.log(`...listening on port ${port}...`)
})
    