// get the model
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = mongoose.model('User');

class UsersController{
  create(req, res){
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
    return res.json(req.body);
  }
}
module.exports = new UsersController();

//Stopped youtube video at 20.11 minutes https://youtu.be/MY1xq-otIX0?t=20m11s
