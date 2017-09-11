var express = require('express');

var app = express();

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/message_board', { useMongoClient: true })


//models here
var Schema = mongoose.Schema;

var PostSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 5},
    text: { type: String, required: true },
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, { timestamps: true });

var CommentSchema = new mongoose.Schema({
    _post: {type: Schema.Types.ObjectId, ref: 'Post'},
    text: { type: String, required: true},
    name: { type: String, required: true},
}, { timestamps: true })

//set our models by passing them their respective Schemas
mongoose.model('Post', PostSchema)
mongoose.model('Comment', CommentSchema)
//store our models in variables
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');

//finish setup here
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

var path = require('path');

app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));

app.set('view engine', 'ejs');

//routing here
app.get('/', function(req, res){
    Post.find({}, function(err, posts){
        if (err) {
            console.log(err)
            res.render('index')
        }
    }).populate('comments').exec(function(err, posts) {
        console.log(posts)
        res.render('index', {posts:posts})
    })

})

app.post('/messages/', function(req, res){
    console.log("POST DATA", req.body)
    var post = new Post({name: req.body.name, text: req.body.message});
    console.log(post)
    post.save(function(err){
        if (err) {
            console.log('could not post')
            res.render('index', {posts: [], title: "You have errors!", errors: post.errors})
        } else {
            console.log("successfully posted!")
            res.redirect('/')
        }
    })
    res.redirect('/')
})

app.post('/comments/:id', function(req, res){
    Post.findOne({_id: req.params.id}, function(err, post){
        var comment = new Comment({name: req.body.name, text: req.body.comment});
        comment._post = post._id;
        post.comments.push(comment);
        comment.save(function(err){
            post.save(function(err){
                if(err) {console.log('Error');}
                else { res.redirect('/')}
            });
        });

    });
});

const PORT = 8000
app.listen(PORT, function() {
    console.log(`listening on port ${PORT}`)
});