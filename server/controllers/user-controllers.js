const { User } = require('../models');

const { signToken } = require('../utils/auth');

module.exports = {
    async createUser({ body }, res) {
        try {
            const user = await User.create(body);

            if (!user) {
                return res.status(400).json({ message: 'Cannot create user!' });
            }

            const token = signToken(user);
            res.json({ token, user });
        } catch (err) {
            res.status(400).json(err);
        }
    },
    async login({ user }, res) {
        const user = await User.findOne({ $or: [{ username: user }, { email: user }] });
        if (!user) {
            return res.status(400).json({ message: 'Cannot find user!' });
        }

        const correctPw = await user.isCorrectPassword(body.password);
        if (!correctPw) {
            return res.status(400).json({ message: 'Wrong password!' });
        }
        const token = signToken(user);
        res.json({ token, user });

    },
    async getSingleUser({ user = null, params }, res) {
        const foundUser = await User.findOne({
            $or: [{ _id: user ? user._id : params.id }, { username: params.username }],
        });

        if (!foundUser) {
            return res.status(400).json({ message: 'Cannot find user!' });
        }

        res.json(foundUser);
    },
    async addGameToWishlist({ user, body }, res) {
        try {
            const updatedWishlist = await User.findOneAndUpdate(
                { _id: user._id },
                { $addToSet: { wishlist: body.gameId } },
                { new: true }
            ).populate('wishlist');
            res.json(updatedWishlist);
        }catch(err){
         res.status(400).json(err);
        }
    },
    async addGameToLikedGames({ user, body }, res) {
        try {
            const updatedLikedGames = await User.findOneAndUpdate(
                { _id: user._id },
                { $addToSet: { likedGames: body.gameId } },
                { new: true }
            ).populate('likedGames');
            res.json(updatedLikedGames);
        }catch(err){
            res.status(400).json(err);
        }
    },
    //add functionality to remove games from wishlist and likedGames
    // add functionality to add and remove friends
    // async getAllUsers (req, res) {
    //     const users = await User.find();
    //     res.json(users);
    // },
};