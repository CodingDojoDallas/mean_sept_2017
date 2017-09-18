const Users = require('../controllers/users');
const Posts = require('../controllers/posts');

module.exports = function(app){
	app.get('/', Users.index);
	app.get('/posts', Posts.index);
}