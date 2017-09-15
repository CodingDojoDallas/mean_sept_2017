const mongoose = require('mongoose');
const AnimalSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3},
  description: { type: String, required: true, minlength: 3},
}, { timestamps: true });
const Animal = mongoose.model('Animal', AnimalSchema);
