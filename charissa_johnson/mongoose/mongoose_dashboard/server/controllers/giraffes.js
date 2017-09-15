const mongoose = require('mongoose');

class GiraffesController{
	//get all giraffes from the db and display them on the page
	index(req, res){
		Giraffe.find({}, (err, giraffes) => {
			if(err){
				console.log(err);
			}
			res.render(giraffes/index.ejs, {giraffes: giraffes })
		})
	}
}

module.exports = new GiraffesController();