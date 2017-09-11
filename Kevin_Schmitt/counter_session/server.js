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
    if(!request.session.count){
        request.session.count = 1;
    }
    else{
        request.session.count++;
    }
    response.render("index.ejs", {count: request.session.count});
})
// app.get('/nextPage', function(req, res) {
//     res.render("nextpage.ejs");
// })
app.post('/addone', (req, res)  => {
    // take data from form
    // form data is always available at req.body
    req.session.count++
    console.log(req.session.count);
    return res.redirect('/')
    // save it into session
})

app.post('/reset', (req, res)  => {
    // take data from form
    // form data is always available at req.body
    req.session.count = 0
    console.log(req.session.count);
    return res.redirect('/')
    // save it into session
})










// always goes at the bottom
app.listen(port, () => {
    console.log(`...shhh...Listening on port ${port}...`);
})