const Giraffe = require('../controllers/giraffes');

module.exports = function(app){
	app.get('/', Giraffes.index);
	app.get('/giraffes', Giraffes.index);
}