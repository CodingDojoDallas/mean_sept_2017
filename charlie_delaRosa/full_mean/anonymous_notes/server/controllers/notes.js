// import mongoose
const mongoose = require('mongoose');
// import Note model
const Note = mongoose.model('Note');

class NotesController {
  index(req, res){
    // Note.find({}, (err, notes) => {
    Note.find({}).sort('-createdAt').exec((err, notes) => {
      if(err){
        return res.json(err);
      }
      return res.json(notes);
    })
  }

  create(req, res){
    Note.create(req.body, (err, note) => {
      if(err){
        return res.json(err);
      }
      return res.json(note);
    })
  }
}

module.exports = new NotesController();
