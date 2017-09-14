var names = require('../controllers/names.js');

module.exports = function(app) {
    app.get('/', function (req, res) {
        names.index(req, res);
    })

    app.get('/new/:name', function (req, res) {
        names.new(req, res);
    })

    app.get('/remove/:name', function (req, res) {
        names.delete(req, res);
    })

    app.get('/:name', function (req, res) {
        names.show(req, res);
    })
}
