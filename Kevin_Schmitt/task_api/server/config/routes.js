//import controllers
const Tasks = require('../controllers/tasks');

module.exports = function(app){
	app.get('/tasks', Tasks.index);
	app.post('/tasks', Tasks.create);
	app.get('/tasks/:id', Tasks.show);
	app.put('/tasks/:id', Tasks.update);
	app.delete('/tasks/:id', Tasks.destroy);
}