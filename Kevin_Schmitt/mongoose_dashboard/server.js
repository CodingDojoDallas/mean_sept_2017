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
        min: [1, 'Age must be greater than zero']
    },
    animal: {
        type: String,
        required: true,
        minlength: [2, 'animal must be greater than 2 characters']
    }
}, { timestamps:true })

// register a model by passing in a schema
mongoose.model('User', UserSchema)
// extract a model by omitting the schema
// this must happen after you register a model
let User = mongoose.model('User');

app.get('/', (req, res) => {
    res.render('index')
})
app.get('/show', (req, res) => {
    // next line sorts with newest at top
    User.find({}).sort('-createdAt').exec((err, users) =>{
        if(err){
            // console.log(err);
            res.render('users_show', { users:users })
        } else{
            // console.log(users);
            res.render('users_show', { users:users })
        }        
    })    
})
app.get('/:id', (req, res) => {
    // console.log(req.params.id);
    User.findById(req.params.id, (err, user) => {
        if(err){
            console.log(err);
            return res.redirect('/show')
        } else{
            res.render('showone', { user: user })
        }
    })
})
app.post('/create', (req, res) =>{
    // console.log(req.body);
    // the save way
    let user = new User(req.body);
    // user.name = req.body.name;
    // user.age = req.body.age;
    // user.msg = req.body.msg;
    user.save((err, user) => {
        if(err){
            // console.log('model validation error')
            console.log(err);
        } else{
            console.log('created user!')
            console.log(user);
        }
        return res.redirect('/show')
    }) 
    // cleaner code would use the following!!
    // User.create(req.body, (err, user) => {
    //     if(err){
    //         console.log(err)
    //         return res.redirect('/show')
    //     }
    //     return res.redirect('/show')        
    // })   
})
app.post('/edit/:id',(req, res) => {
    User.findById(req.params.id, (err, user) => {
        if(err){
            console.log(err);
            return res.redirect('/show')
        } else{
            user.name = req.body.name
            user.age = req.body.age
            user.animal = req.body.animal
            user.save(function(err){
                // if save was successful awesome!
            })               
            res.redirect('/show')
        }
    })
})
app.post('/destroy/:id',(req, res) => {
    // ...delete 1 record by a certain key/value.
    User.remove({_id: req.params.id}, function(err){
    // This code will run when the DB has attempted to remove one matching record to {_id: 'insert record unique id here'}
    })
   
    // User.remove({_id: req.params.id}, (err, user) => {
    //     if(err){
    //         console.log(err);
    //         return res.redirect('/show')
    //     } else{       
    //         console.log(req.params.id)       
    //         res.redirect('/show')
    //     }
    // })
    res.redirect('/show')
})



app.listen(port, () => console.log(`listening on port ${port}...`))