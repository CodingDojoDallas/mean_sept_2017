const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

let UserSchema = new mongoose.Schema({
	name: {
		type: String
	},
	email: {
		type: String
	},
	password: {
		type: String
	}
}, { timestamps: true });

UserSchema.methods.authenticate = function(password){
	return bcrypt.compareSync(password, this.password);
}

mongoose.model('User', UserSchema);
