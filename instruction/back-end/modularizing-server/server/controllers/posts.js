const mongoose = require('mongoose');
const Post = mongoose.model('Post');

class PostsController {
	index(req, res){
		res.render('posts/post.ejs')
	}
}

module.exports = new PostsController()
