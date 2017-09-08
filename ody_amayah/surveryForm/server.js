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
    // req.session.user = 'Cody'
    // res.send('setting the User to Cody');
    return res.render('index', { session: req.session })
})

app.get('/result', (req, res) => {

    return res.render('result', { session:req.session })
})

app.post('/info', (req, res) =>{
    //take the data from the form
    //form data is always available at req.body
    req.session.errors = []
    let isValid = true
    if(req.body.name == ''){
      isValid = false;
      req.session.errors.push('Name cannot be blank')
    }
    if(req.session.errors.length > 0){
      return res.redirect('/')
    }
    console.log(req.body);
    req.session.user = req.body.name
    req.session.location = req.body.location
    req.session.language= req.body.language
    req.session.comment = req.body.comment
    return res.redirect('/result')
    //save it into sessions
})




app.listen(port, () => console.log(`listening in port ${port}...`));
