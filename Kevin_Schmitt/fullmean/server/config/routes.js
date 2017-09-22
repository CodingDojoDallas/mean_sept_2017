

//import controllers
const Tasks = require('../controllers/tasks');
const path = require('path');

module.exports = function(app){
	app.get('/tasks', Tasks.index);
	app.post('/tasks', Tasks.create);
	app.get('/tasks/:id', Tasks.show);
	app.put('/tasks/:id', Tasks.update);
	app.delete('/tasks/:id', Tasks.destroy);
	// catch-all must be at the bottom
	app.all("*", (req, res, next) => {
		res.sendFile(path.resolve('./public/dist/index.html'))
	})
}