const {Schema , model} = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new Schema({ 
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Please enter a valid e-mail address'],
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
    },
    wishlist: [
        {
            type: Schema.Types.ObjectId,
            ref: 'wishlist',
        },
    ],
    likedGames: [
        {
            type: Schema.Types.ObjectId,
            ref: 'likedGames',
        },
    ],
});

userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
});

userSchema.methods.isCorrectPassword = async function(password) {
    return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;
