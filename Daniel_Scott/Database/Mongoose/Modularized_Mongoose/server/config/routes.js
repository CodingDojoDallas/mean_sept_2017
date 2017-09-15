const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Animal = mongoose.model('Animal');
const animals = require('../controllers/animals.js');
module.exports = (app)=>{
app.get('/', (req, res)=>{
  animals.showAll(req, res)
});
app.get('/animals/new', (req, res)=>{
  animals.new(req, res)
});
app.get('/animals/:id', (req, res)=>{
  animals.showOne(req, res)
});
app.post('/animals', (req, res)=>{
  animals.create(req, res)
});
app.get('/animals/edit/:id', (req, res)=>{
  animals.edit(req, res)
});
app.post('/animals/:id', (req, res)=>{
  animals.update(req, res)
});
app.post('/animals/destroy/:id', (req, res)=>{
  animals.destroy(req, res)
});
}
