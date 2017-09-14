const express = require('express');
let bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose');
let port = 8000;
const app = express();

// set up middleware
app.use(express.static(__dirname + '/static'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'doesntmatterwhatyoutypehere',
    resave: false,
    saveUninitialized: true,
}))

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');



// connect to database
mongoose.connect('mongodb://localhost/new_db', {useMongoClient: true})
mongoose.Promise = global.Promise;

let UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name cannot be blank'],
        minlength: [2, 'Name must be greater than 2 characters'],
    },
    age: {
        type: Number,
        min: [1, 'Age must be greater than one']
    },
    msg: {
        type: String,
        required: true,
        minlength: [10, 'Message must be greater than 10 characters']
    }
}, { timestamps:true })

// register a model by passing in a schema
mongoose.model('User', UserSchema)
// extract a model by omitting the schema
// this must happen after you register a model
let User = mongoose.model('User');

app.get('/', (req, res) => {
    User.find({}, (err, users) =>{
        if(err){
            console.log(err);
        } else{
            console.log(users);
            res.render('index', { users:users })
        }
    })
})
app.get('/users/new', (req, res) => {
    // next line sorts with newest at top
    User.find({}).sort('-createdAt').exec((err, users) =>{
        if(err){
            console.log(err);
        } else{
            console.log(users);
            res.render('users_new', { users:users })
        }
        
    })
    
})
app.post('/users', (req, res) =>{
    console.log(req.body);
    // the save way
    let user = new User(req.body)
    // user.name = req.body.name;
    // user.age = req.body.age;
    // user.msg = req.body.msg;
    user.save((err, user) => {
        if(err){
            console.log('model validation error')
            console.log(err);
        } else{
            console.log('created user!')
            console.log(user);
        }
        return res.redirect('/users/new')
    })
    
})

app.listen(port, () => console.log(`listening on port ${port}...`))