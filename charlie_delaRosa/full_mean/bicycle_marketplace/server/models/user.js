const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'First name cannot be blank']
    },
    lastName: {
        type: String,
        required: [true, 'Last name cannot be blank']
    },
    email: {
        type: String,
        required: [true, 'Email cannot be blank']
    },
    password: {
        type: String,
        required: [true, 'Email cannot be blank']
    },
    posts: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post'
    }]
}, { timestamps: true })

UserSchema.pre('save', function(next) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10));
    next();
})

UserSchema.methods.authenticate = function(password) {
    return bcrypt.compareSync(password, this.password);
}

mongoose.model('User', UserSchema);
