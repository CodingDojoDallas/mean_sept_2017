const mongoose = require('mongoose');
const Player = mongoose.model('Player');

module.exports = {
  getAll: (req, res, next)=>{
    console.log("I'm getting them ALL.")
    Player
      .find()
      .then((players)=>{
        res.json(players); 
      })
      .catch((err)=>{
        res.status(501).json(err);
      })
  },
  getThis: (req, res, next)=>{
    console.log("parameters received:", req.params);
    Player
      .findById(req.params.id)
      .then((player)=>{
        res.json(player);
      })
      .catch((err)=>{
        res.status(502).json(err);
      })
  },
  addThis:(req, res, next)=>{
    console.log('POST DATA', req.body);
    new Player({name: req.body.name, position: req.body.position,
      status:{game1: 'undecided', game2: 'undecided', game3: 'undecided'}})
      .save()
      .then(()=>{res.json(true);})
      .catch((err)=>{res.status(503).json(err);});
  },
  deleteThis: (req, res, next)=>{
    console.log('POST DATA', req.body);
    Player
      .findByIdAndRemove(req.body._id)
      .then(()=>res.json(true))
      .catch((err)=>{
        res.status(504).json(err);
      })
  },
  updateThis: (req, res, next)=>{
    Player
      .findByIdAndUpdate(
        req.body._id,
        {$set: {
          status: req.body.status
        }}
      )
      .then((player)=>{  
        res.json(true)
      })
      .catch((err)=>{res.status(503).json(err);});
  },
}