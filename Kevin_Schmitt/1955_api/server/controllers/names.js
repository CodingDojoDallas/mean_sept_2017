var mongoose = require('mongoose');
var Name = mongoose.model('Name');

module.exports= {
	all: function(req, res) {
		var name = Name.find({}, function(err, names){
			res.json(names);
		})
	},
	create: function(req, res){
		var create_name = Name.create({name: req.params.name}, function(err, name){
			res.redirect('/');
		})
	},
	remove: function(req, res) {
		var remove = Name.remove({name: req.params.name}, function(err, name){
			res.redirect('/');
		})
	},
	user: function(req, res) {
		var user = Name.find({name: req.params.name}, function(err, user){
			res.json(user);
		})
	}
}