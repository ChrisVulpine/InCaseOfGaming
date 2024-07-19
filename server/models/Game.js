const { Schema, model } = require('mongoose');

const gameSchema = new Schema({
    id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    small_cap: {
        type: String,
        required: true,
    },
});

const Game = model('Game', gameSchema);

module.exports = Game;