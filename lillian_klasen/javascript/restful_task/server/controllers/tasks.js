var mongoose = require('mongoose');
var Task = mongoose.model('Task');

module.exports = {
    index: function(req, res) {
        Task.find({}, function(err, tasks){
            if(err){
                console.log(err);
                // res.redirect('/tasks');
            }
            else{
                res.json({tasks: tasks});
            }
        })
    },

    show: function(req, res) {
        Task.findOne({_id: req.params.id}, function(err, task) {
            if(err){
                console.log(err);
                // res.redirect('/tasks');
            }
            else{
                console.log(task);
                res.json({task: task});
            }
        })
    },

    create: function(req, res) {
        var task = new Task(req.body);
        task.save(function(err) {
            if(err){
                console.log(err);
                // res.redirect('/tasks');
            }
            else{
                console.log('successfully added');
                res.redirect('/tasks');
            }
        })
    },

    edit: function(req, res) {
        Task.findOne({_id: req.params.id}, function(err, task){
            if(err){
                console.log(err);
            }
            else{
                console.log('THIS IS THE TASK', task);
                res.render('edit', {task: task});
            }
        })
    },

    update: function(req, res) {
        Task.update({_id: req.params.id}, req.body, function(err, task){
            if(err){
                console.log(err);
            }
            else{
                console.log('UPDATED TASK:', task);
                res.redirect('/tasks');
            }
        })
    },

    delete: function(req, res) {
        Task.remove({_id: req.params.id}, {upsert: true}, function(err){
            if(err){
                console.log(err);

            }
            else{
                console.log('REMOVED TASK');
                res.redirect('/tasks');
            }
        })
    }
}
