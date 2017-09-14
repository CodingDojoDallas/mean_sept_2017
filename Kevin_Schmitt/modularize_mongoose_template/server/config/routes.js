const Users = require('../controllers/users');


module.exports = function(app){
    app.get('/', Users.index);
}
