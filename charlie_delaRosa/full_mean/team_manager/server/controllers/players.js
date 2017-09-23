// import mongoose
const mongoose = require('mongoose');
// import Player model
const Player = mongoose.model('Player');

class PlayersController {
  index(req, res){
    console.log("In the index method.");
    // Player.find({}, (err, Players) => {
    Player.find({}).sort('name').exec((err, players) => {
      if(err){
        return res.json(err);
      }
      return res.json(players);
    })
  }

  show(req, res){
    Player.findById(req.params.id, (err, player) => {
      if(err){
        return res.json({error: '404 - Player not found' });
      }
      return res.json(player);
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

  update(req, res){
    Player.findByIdAndUpdate(req.params.id, { $set : req.body }, { runValidators: true, new: true }, (err, player) => {
      if(err){
        return res.json(err);
      }
      return res.json(player);
    })
  }

  destroy(req, res){
    Player.findByIdAndRemove(req.params.id, (err, result) => {
      if(err){
        return res.json(err);
      }
      return res.json({ "success": "Successfully deleted player." })
    });
  }
}

module.exports = new PlayersController();
