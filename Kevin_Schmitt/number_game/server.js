var express = require('express');
let bodyParser = require('body-parser');
let session = require('express-session');
var port = 8000;

var app = express();

// now set up the middleware (.set)

// .set
// console.log('dirname =' , __dirname + '/views');
// views
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
// static
// .use
app.use(express.static(__dirname + '/static'))
// POST request helper
app.use(bodyParser.urlencoded({ extended: true }));
// session
app.use(session({
    secret: 'somethingsecretdoesnotmatterwhatyouput',
    resave: false,
    saveUninitialized: true,
}))




// routes
app.get('/', (request, response) => {
    response.render("index.ejs");
})

app.post('/guess', (req, res)  => {
    var num = Math.floor((Math.random() * 100) + 1);
    
    return res.redirect('/')
})

// always goes at the bottom
app.listen(port, () => {
    console.log(`...shhh...Listening on port ${port}...`);
})