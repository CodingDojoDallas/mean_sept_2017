var mongoose = require('mongoose');
var Puppy = mongoose.model('Puppy');

module.exports = {
    index: function(req, res) {
        Puppy.find({}, function(err, puppies) {
        if(err){
            console.log('something went wrong');
        }
        else {
            res.render('index', {puppies: puppies});
        }
      })
  },

    show: function(req, res) {
        Puppy.findOne({_id: req.params.id}, function(err, puppy) {
            if(err){
                console.log('couldnt get the puppy part one');
            }
            else{
                console.log(puppy);
                res.render('show', {puppy: puppy});
            }
        })
    },

    create: function(req, res) {
        var puppy = new Puppy({name: req.body.name, breed: req.body.breed});

        puppy.save(function(err) {
            if(err) {
                console.log('something ELSE went wrong');
                res.redirect('/puppies');
            }
            else {
                console.log('successfully added puppy :)');
                res.redirect('/');
            }
        })
    },

    edit: function(req, res) {
        Puppy.findOne({_id: req.params.id}, function(err, puppy) {
            if(err){
                console.log('couldnt get the puppy part 2');
            }
            else{
                console.log(puppy);
                res.render('edit', {puppy: puppy});
            }
        })
    },

    update: function(req, res) {
        Puppy.update({_id: req.params.id}, req.body, function(err, puppy){
            if(err){
                console.log(err);
            }
            else {
                res.redirect('/');
             }
         })
    },

    destroy: function(req, res) {
        Puppy.remove({_id: req.params.id }, function(err){
            if(err){
                console.log('puppy not removed');
            }
            else{
                res.redirect('/');
            }
        })
    }
}
