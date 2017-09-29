const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
	name: {
		type: String,
	},
	position: {
			type: String,
	},
	games: Object
}, {timestamps: true})

mongoose.model('Player', PlayerSchema);