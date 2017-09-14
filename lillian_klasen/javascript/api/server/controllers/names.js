var mongoose = require('mongoose');
var Name = mongoose.model('Name');

module.exports = {
    index: function(req, res) {
        Name.find({}, function(err, names) {
            if(err){
                console.log(err);
                res.redirect('/');
            }
            else{
                res.json({names: names});
            }
        })
    },

    new: function(req, res) {
        var name = new Name({name: req.params.name});

        name.save(function(err){
            if(err) {
                console.log(err);
                res.redirect('/');
            }
            else {
                console.log('successfully added');
                res.redirect('/')
            }
        })
    },

    delete: function(req, res) {
        Name.remove({name: req.params.name}, function(err){
            if(err){
                console.log(err);
                res.redirect('/');
            }
            else{
                console.log('removed name');
            }
        })
    },

    show: function(req, res) {
        Name.findOne({name: req.params.name}, function(err, name) {
            if(err){
                console.log(err);
                res.redirect('/');
            }
            else{
                console.log(name);
                res.json({name: name});
            }
        })
    }
}
