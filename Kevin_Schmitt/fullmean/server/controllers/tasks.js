const mongoose = require('mongoose');
const Task = mongoose.model('Task');

class TasksController {
	index(req, res) {
		// sorts data and posts newest at top
		Task.find({}).sort('-createdAt').exec((err, tasks) => {
			if(err){
				return res.json(err);
			}
			return res.json(tasks);
		})
	}
	create(req, res) {
		Task.create(req.body, (err, task) => {
			if(err){
				return res.json(err);
			}
			return res.json(task);
		})
	}
	show(req, res){
		Task.findById(req.params.id, (err, task) => {
			if(err){
				return res.json({ error: '404 - Task not found' });
			}
			return res.json(task);
		})
	}
	update(req, res) {
		// by default update doesn't run validators. you need to runValidators: true to activate
		Task.findByIdAndUpdate(req.params.id, { $set : req.body }, { runValidators: true, new: true }, (err, task) => {
			if(err){
				return res.json(err);
			}
			return res.json(task);
		})
	}
	destroy(req, res){
		Task.findByIdAndRemove(req.params.id, (err, task) => {
			if(err){
				return res.json(err);
			}
			return res.json({
				'success': 'successfully deleted task'
			});
		})
	}
}
// get all tasks method: index, route: /tasks, type: get
// create a task method: create, route: /tasks type: post
// get a single task form the db method: show, route: /tasks/:id, type: get
// update task by id method: update, route: /tasks/:id, type: put/patch
// delete task by id method: destroy, route: /tasks/:id, type: delete





module.exports = new TasksController();


