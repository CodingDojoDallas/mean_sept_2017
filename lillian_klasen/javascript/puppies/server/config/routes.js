var puppies = require('../controllers/puppies.js');

module.exports = function(app) {

app.get('/', function (req, res) {
    puppies.index(req, res);
})

app.post('/puppies', function(req, res) {
    puppies.create(req, res);
})

app.get('/puppies/:id', function (req, res) {
    puppies.show(req, res);
})

app.get('/puppies', function (req, res) {
    res.render('puppies');
})

app.get('/puppies/edit/:id', function (req, res) {
    puppies.edit(req, res);
})

app.post('/puppies/:id', function (req, res) {
    puppies.update(req, res);
})

app.post('/puppies/destroy/:id', function (req, res) {
    puppies.destroy(req, res);
  })
}
