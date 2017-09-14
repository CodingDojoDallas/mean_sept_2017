const mongoose = require('mongoose');
const User = mongoose.model('User');

class UsersController {
    // get all users from DB and display
    index(req, res){
        User.find({}, (err, users) => {
            if(err){
                console.log(err);
            }
            res.render('index', { users: users})
        })
    }
}


module.exports = new UsersController();