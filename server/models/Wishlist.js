const {Schema, model} = require('mongoose');

const wishlistSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
    },
    games: [
        {
            type: String,
        },
    ],
});

const Wishlist = model('Wishlist', wishlistSchema);

module.exports = Wishlist;