var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/message_board');

var Schema = mongoose.Schema;

var MessageSchema = new mongoose.Schema({
    name: {type:String, required: true},
    message: {type:String, required: true},
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
})

var CommentSchema = new mongoose.Schema({
    _message: {type: Schema.Types.ObjectId, ref: 'Message'},
    name: {type:String, required: true},
    comment: {type:String, required: true}
})

mongoose.model('Message', MessageSchema);
mongoose.model('Comment', CommentSchema);
var Message = mongoose.model('Message');
var Comment = mongoose.model('Comment');

app.use(bodyParser.urlencoded({ extended: true }));

var path = require('path');

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    Message.find({}).populate('comments').exec(function(err, messages) {
        for (i in messages) {
     console.log(messages[i].comments);
}
        res.render('index', {messages: messages});
    })
})

app.post('/messages', function (req, res) {
    var message = new Message({
        name: req.body.name,
        message: req.body.message
    });

    message.save(function(err) {
        if(err) {
            console.log(err);
        }
        else {
            res.redirect('/');
        }
    })
})

app.post('/comments/:id', function (req, res) {
    console.log("inside the findOne");
    Message.findOne({_id: req.params.id}, function(err, message){
        var comment = new Comment(req.body);
        comment._message = message._id;

        comment.save(function(err){
            message.comments.push(comment);
            message.save(function(err){
                if(err) {
                    console.log('error');
                }
                else {
                    res.redirect('/');
                }
            })
        })
    })
})

app.listen(8000, function() {
    console.log("listening on port 8000");
})
