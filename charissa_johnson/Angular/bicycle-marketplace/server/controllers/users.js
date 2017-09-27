const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = mongoose.model('User');
const Bicycle = mongoose.model('Bicycle');

module.exports = {
	create: function(req, res){
		let user = new User({
			firstname: req.body.firstname,
			lastname: req.body.lastname,
			email: req.body.email,
			password: req.body.password
		});
		user.save().then((user) => {
			req.session.userId = user._id;
			console.log(`Successfully saved ${user.email}`);
			res.json(user);
			console.log('After res.json, before redirect');
		})
		.catch((err) => {
			res.status(500);
			console.log("Inside the catch create");
			console.log(err);
			res.json(err);
		})
	},
	findUser: function(req, res){
		console.log("Inside of findCreator method in Users controller");
		User.findOne({ _id: req.body.createId }).exec(function(err, user){
			if(err){
				console.log("Errors in findUser");
				res.json(err);
				res.status(500);
			}
			else{
				res.json(user);
			}
		})
	},
	logout: function(req, res){
		req.session.destroy();
		res.redirect('/');
	},
	getSession: function(req, res){
        if(req.session.userId == null)
        {
            res.status(500);
            console.log("Session is currently null.");
            res.json({error: "Session is currently null!"});
        }
        else
        {
            User.findOne({_id: req.session.userId}, function(err, user){
                res.status(200);
                res.json(user);
            })
        }
    }

}