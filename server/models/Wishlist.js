const {Schema, model} = require('mongoose');

const wishlistSchema = new Schema({
    games: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Game',
        },
    ],
});

const Wishlist = model('Wishlist', wishlistSchema);

module.exports = Wishlist;