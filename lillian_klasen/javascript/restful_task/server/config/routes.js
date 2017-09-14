var tasks = require('../controllers/tasks.js');

module.exports = function(app) {
    app.get('/tasks', function (req, res) {
        tasks.index(req, res);
    })

    app.get('/tasks/new', function (req, res) {
        res.render('create');
    })

    app.get('/tasks/:id/edit', function (req, res) {
        tasks.edit(req, res);
    })

    app.get('/tasks/:id', function (req, res) {
        tasks.show(req, res);
    })

    app.post('/tasks', function (req, res) {
        tasks.create(req, res);
    })

    app.post('/tasks/:id/update', function (req, res) {
        tasks.update(req, res);
    })

    app.post('/tasks/:id/delete', function (req, res) {
        tasks.delete(req, res);
    })
}
