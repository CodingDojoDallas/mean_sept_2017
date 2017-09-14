const mongoose = require('mongoose');
const User = mongoose.model('User');

class UsersController {
    // get all users from DB and display
    index(req, res){
        res.render('index')
    }
    show(req, res){
        User.find({}).sort('-createdAt').exec((err, users) => {
            if(err){
                console.log(err);
            }
            res.render('show', { users: users})
        })
    }
    create(req, res){
        User.create(req.body, (err, user) => {
            if(err){
                console.log(err)
                return res.redirect('/show')
            }
            return res.redirect('/show')        
        })
    }
    delete(req, res){
        
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
        
    }
    one(req,res){
        User.findById(req.params.id, (err, user) => {
            if(err){
                console.log(err);
                return res.redirect('/show')
            } else{
                res.render('one', { user: user })
            }
        })
    }
    edit(req,res){
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
    }
}

module.exports = new UsersController();