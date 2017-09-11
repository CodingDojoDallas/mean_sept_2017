//require my npm modules
let express =require('express');
let bodyParser = require('body-parser');
let session = require('express-session');
let port = 8000;

let app = express();

// set up my middleware
// views
app.set('view engine', 'ejs');
app.set('views', __dirname + "/views");
// static content
app.use(express.static(__dirname + '/static'));
// POST request helper
app.use(bodyParser.urlencoded({ extended: true}));
// session
app.use(session({
    secret: 'whateveryouputinherewillwork',
    resave: false,
    saveUninitialized: true
}))

// routes
app.get('/', (req, res) => {
    if('count' in req.session){
        req.session.count++;
    }else {
        req.session.count = 1;
    }
    return res.render('index', { session:req.session })
})

// app.post('/count', (req, res) => {
//     return res.redirect('/', { session:req.session })
// })





app.listen(port, () => console.log(`listening in port ${port}...`));
