const Posts = require('../controllers/posts');
const Users = require('../controllers/users');

const path = require('path');

module.exports = function(app){
  // app.get('/', (req, res) => res.send('hello world'))
  app.get('/posts', Posts.index);
  app.get('/posts/:id', Posts.show);
  app.post('/posts', Posts.create);
  app.put('/posts/:id', Posts.update);
  app.delete('/posts/:id', Posts.destroy);

  app.get('/users', Users.index);
  app.get('/users/:id', Users.show);

  app.post('/users', Users.create);

  app.put('/users/:id', Users.update);
  app.delete('/users/:id', Users.destroy);

  app.post('/login', Users.authenticate);
  app.delete('/users', Users.logout);
  app.get('/session', Users.session);
  app.all('*', (req, res, next) => {
      res.sendFile(path.resolve('./public/dist/index.html'));
  });

}
