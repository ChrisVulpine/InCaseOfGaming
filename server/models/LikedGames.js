const { Schema, model } = require('mongoose');

const likedGamesSchema = new Schema({
    games: [
        {
            type: Schema.Types.ObjectId,
            ref: 'games',
        },
    ],
});

const LikedGames = model('LikedGames', likedGamesSchema);

module.exports = LikedGames;