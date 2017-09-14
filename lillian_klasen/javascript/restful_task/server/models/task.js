var mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({
    title: String,
    description: {type: String, default: ""},
    completed: {type: Boolean, default: false}
}, {timestamps: true})

var Task = mongoose.model('Task', TaskSchema);
