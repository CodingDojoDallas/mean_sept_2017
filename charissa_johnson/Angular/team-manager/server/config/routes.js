//import controllers
const Players = require('../controllers/players');
const path = require('path');

module.exports = function(app){
	//app.get('/', players.index);
	app.get('/players', Players.index);
	app.post('/players', Players.create);
	app.get('/players/:id', Players.show);
	app.put('/players/:id', Players.update);
	app.delete('/players/:id', Players.destroy);
	app.all("*", (req, res) => {
		res.sendFile(path.resolve('./public/dist/index.html'));
	})
}