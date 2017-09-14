const Users = require('../controllers/users');


module.exports = function(app){
    // app.get('/', Users.index);
    app.get('/', Users.index);
    app.get('/show', Users.show);
    app.get('/:id', Users.one);
    app.post('/create', Users.create);
    app.post('/destroy/:id', Users.delete);
    app.post('/edit/:id', Users.edit);
}
