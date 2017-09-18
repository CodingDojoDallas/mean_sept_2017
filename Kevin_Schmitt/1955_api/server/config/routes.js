var nameController = require('../controllers/names.js');

module.exports = function(app) {
	app.get('/', nameController.all),
	app.get('/new/:name/', nameController.create),
	app.get('/remove/:name/', nameController.remove),
	app.get('/:name', nameController.user)
}