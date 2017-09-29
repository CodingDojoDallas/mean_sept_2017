const mongoose = require('mongoose');
const Note = mongoose.model('Note');

class NotesController{
	create(req, res){
		Note.create(req.body, (err, note) => {
			if(err){
				return res.json(err);
			}
			return res.json(note);
		})
	}
	index(req, res){
		//use .populate to order the notes
		//use .exec to chain the functions and put another function call
		//inbetween two functions
		Note.find({}).sort('-createdAt').exec((err, notes) => {
			if(err){
				res.json(err);
			}
			res.json(notes);
		})
	}
}

module.exports = new NotesController();