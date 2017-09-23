const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name must be at least three characters'],
    minlength: [3, 'Name must be at least three characters'],
  },
  prefPosition: {
    type: String,
    required: [true, 'Preferred position must be at least three characters'],
    minlength: [3, 'Preferred position must be at least three characters'],
  },
  game1: {
    type: Number,
    default: 0,
  },
  game2: {
    type: Number,
    default: 0,
  },
  game3: {
    type: Number,
    default: 0,
  }
  }, { timestamps: true });

mongoose.model('Player', PlayerSchema);
