const mongoose = require('mongoose');

let TaskSchema = new mongoose.Schema({
  title: String,
  description: {
    type: String,
    default: '',
  },
  completed: {
    type: Boolean,
    default: false,
  }
}, { timestamps: true });

mongoose.model('Task', TaskSchema);
