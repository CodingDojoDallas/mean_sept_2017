const mongoose = require('mongoose');
const Player = mongoose.model('Player');

class PlayersController{
	index(req, res){
		Player.find({}, (err, players) => {
			if(err){
				return res.json(err);
			}
			return res.json(players);
		})
	}
	create(req, res){
		Player.create(req.body, (err, player) => {
			if(err){
				return res.json(err);
			}
			return res.json(player);
		})
	}
	show(req, res){
		Player.findById(req.params.id, (err, player) => {
			if(err){
				return res.json({ error: '404 - player not found'});
			}
			return res.json(player);
		})
	}
	update(req, res){
		Player.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true }, (err, player) => {
			if(err){
				return res.json(err);
			}
			return res.json(player);
		})
	}
	destroy(req, res){
		Player.findByIdAndRemove(req.params.id, (err, player) => {
			if(err){
				return res.json(err);
			}
			return res.json({
				'success': 'successfully deleted task'
			});
		})
	}
}

module.exports = new PlayersController();