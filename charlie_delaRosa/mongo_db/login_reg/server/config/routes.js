//imports
const Users = require('../controllers/users');

module.exports = function(app){
	app.get('/', Users.homepage);
	app.post('/users', Users.create);
	app.post('/users/authenticate', Users.authenticate);
	app.get('/session', Users.isLoggedIn);
	// app.delete('/session', Users.logout);
	app.get('/logout', Users.logout);
	app.get('/dashboard', Users.dashboard);
}
