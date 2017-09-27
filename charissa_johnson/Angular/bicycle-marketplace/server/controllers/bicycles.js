const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Bicycle = mongoose.model('Bicycle');
const User = mongoose.model('User');

module.exports = {
	addBicycle: function(req, res){
		let bicycle = new Bicycle({
			imgurl: req.body.imgurl,
			title: req.body.title,
			description: req.body.description,
			price: req.body.price,
			location: req.body.location,
			_user: req.session.userId
		});
		bicycle.save().then((bicycle) => {
			User.update({ _id: req.session.userId }, { $push: { bicycles: bicycle }}, function(err, user){
				if(err){
					console.log('There were errors tying the bicycle to the user...');
				}
				else{
					console.log('Bicycle successfully tied to user!');
				}
			});
			console.log(`Successfully saved ${bicycle.title}...`);
			res.json(bicycle);
			console.log(err);
			res.json(err);
		});
	},
	getAllBikes: function(req, res){
		Bicycle.find()
		.exec((err, allBicycles) => {
			if(err){
				console.log("No bikes found");
			}
			else{
				console.log("All users bikes: " + myBicycles);
				res.json(myBicycles);
			}
		})
	},
	removeBike: function(req, res){
		console.log("Inside removebike method in Express controller", req.body.bikeid);
		Bicycle.remove({ _id: req.body.bikeid })
		.then(bike => { res.json(true); })
		.catch(err => console.log("We didn't remove the bike " + err))
	},
	updateBicycle: function(req, res){
		console.log("Inside the update bike controller");
		console.log(req.body)
		Bicycle.findOne({ _id: req.body.bike._id })
		.then((bike) => {
			bike.title = req.body.bike.title
			bike.location = req.body.bike.location
			bike.price = req.body.bike.price
			bike.description = req.body.bike.description
			bike.save()
		})
		.then(() => { res.json(true) })
		.catch((err) => { console.log(err) })
	},
	logout: function(req, res){
		req.session.destroy();
		res.redirect('/');
	}
}