const mongoose = require('mongoose');
const Player = mongoose.model('Player');
const players = require('../controllers/players.js');
const path = require('path');

module.exports = (app)=>{
  app.get('/dbplayers', (req, res, next)=>{players.getAll(req, res, next)});
  app.post('/dbplayers/add', (req, res, next)=>{players.addThis(req, res, next)});
  app.post('/dbplayers/delete/', (req, res, next)=>{players.deleteThis(req, res, next)});
  app.post('/dbplayers/update/', (req, res, next)=>{players.updateThis(req, res, next)});
  app.get('/dbplayers/:id', (req, res, next)=>{players.getThis(req, res, next)});

  app.all('*', (req, res, next)=>{
    res.sendFile(path.resolve('./public/dist/index.html'))
  });
}