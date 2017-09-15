// Imports
const Users = require('../controllers/users');
module.exports = function(app){
app.post('/users', Users.create);
}
